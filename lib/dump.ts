
import { ChildProcess } from 'child_process';
import * as path from 'path';
import { exporterFactory, ExportOptions, HerobackExporter } from './exporters';
import { HerobackProvider, providerFactory } from './providers';
import * as Utils from './utils';

export const CLEAN_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
export const CLEAN_REGEX_SUBSTITUTION = '$1$2$3.$4$5$6.$7000000';

export interface HerobackDumpOptions {
  provider: string | HerobackProvider;
  exporter: string | HerobackExporter;
  baseDir?: string;
  gzip?: boolean;
  uri: string;
}

export default class HerobackDump {
  protected readonly uri: Utils.UriParamsSchema;
  protected readonly timestamp: Date;
  protected readonly provider: HerobackProvider;
  protected readonly exporter: HerobackExporter;

  constructor(public readonly options: HerobackDumpOptions) {
    this.timestamp = new Date();
    this.uri = Utils.Uri.parse(options.uri);
    this.provider = HerobackDump.initializeProvider(options);
    this.exporter = HerobackDump.initializeExporter(options);
  }

  /**
   * Initializes an exporter instance based on constructor options.
   */
  private static initializeProvider(options: HerobackDumpOptions): HerobackProvider {
    let provider;

    if (typeof options.provider === typeof 'str') {
      provider = providerFactory(options.provider as string);
    } else {
      provider = options.provider as HerobackProvider;
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
      return `${clean}.sql.gz`;
    }
    return `${clean}.sql`;
  }

  /**
   * Spawns a child process and dumps requested database. This methods returns the
   * child process instance itself without any heroback logics wrapped yet, 
   * and is mostly used internally.
   * <br />
   * For a higher level interface, check ```dump.export()``` and ```dump.raw()```.
   */
  async run(): Promise<ChildProcess> {
    const dump = await this.provider.dump({ uri: this.uri });

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