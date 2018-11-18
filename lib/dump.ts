
import { ChildProcess } from 'child_process';
import { Logger } from 'ts-framework-common';
import { exporterFactory, ExportOptions, HerobackExporter, HerobackProvider, providerFactory } from './base';
import * as Providers from './providers';
import * as Utils from './utils';

export const CLEAN_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
export const CLEAN_REGEX_SUBSTITUTION = '$1$2$3.$4$5$6.$7000000';

export interface HerobackDumpOptions {
  provider: string | HerobackProvider;
  exporter: string | HerobackExporter;
  baseDir?: string;
  logger?: Logger;
  gzip?: boolean;
  uri: string;
}

export default class HerobackDump {
  protected readonly logger: Logger;
  protected readonly timestamp: Date;
  protected readonly provider: HerobackProvider;
  protected readonly exporter: HerobackExporter;

  constructor(public readonly options: HerobackDumpOptions) {
    this.timestamp = new Date();
    this.logger = options.logger || Logger.getInstance();
    this.provider = HerobackDump.initializeProvider(options);
    this.exporter = HerobackDump.initializeExporter(options);
  }

  /**
   * Initializes a provider instance based on constructor options.
   */
  private static initializeProvider(options: HerobackDumpOptions): HerobackProvider {
    let provider;

    if (options.provider instanceof HerobackProvider) {
      provider = options.provider;
    } else {
      provider = providerFactory(options, Providers);
    }

    return provider;
  }

  /**
   * Initializes an exporter instance based on constructor options.
   */
  private static initializeExporter(options: HerobackDumpOptions): HerobackExporter {
    let exporter;

    if (typeof options.exporter === typeof 'str') {
      exporter = exporterFactory(options.exporter as string);
    } else {
      exporter = options.exporter as HerobackExporter;
    }

    return exporter;
  }

  /**
   * Gets a generated filename for this dump instance.
   */
  get fileName(): string {
    const clean = this.timestamp.toISOString().replace(CLEAN_REGEX, CLEAN_REGEX_SUBSTITUTION);
    if (this.options.gzip) {
      return `${clean}${this.provider.ext}.gz`;
    }
    return `${clean}.dump${this.provider.ext}`;
  }

  /**
   * Spawns a child process and dumps requested database. This methods returns the
   * child process instance itself without any heroback logics wrapped yet, 
   * and is mostly used internally.
   * <br />
   * For a higher level interface, check ```dump.export()``` and ```dump.raw()```.
   */
  async run(): Promise<ChildProcess> {
    const dump = await this.provider.dump();

    // Optionally, compress with GZIP
    if (this.options.gzip) {
      const gzipChild = Utils.Stream.gzip(dump.stdout);
      return gzipChild;
    }

    return dump;
  }

  /**
   * Dumps as a raw string. This is meant for development purposes, 
   * may be bad for overall perfomance.
   */
  async raw(): Promise<string> {
    const dump = await this.run();
    return Utils.Stream.stringify(dump.stdout);
  }

  /**
   * Dumps and exports the results.
   */
  async export(options: ExportOptions = {}): Promise<boolean> {
    const dump = await this.run();
    return this.exporter.export(dump, { fileName: this.fileName, ...options });
  }
}