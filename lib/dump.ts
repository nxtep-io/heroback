
import { ChildProcess } from 'child_process';
import { BaseError, Logger, LoggerInstance } from 'ts-framework-common';
import { exporterFactory, ExportOptions, HerobackExporter, HerobackProvider, providerFactory } from './base';
import { FileExporter } from './exporters';
import * as Providers from './providers';
import * as Utils from './utils';

export const CLEAN_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
export const CLEAN_REGEX_SUBSTITUTION = '$1$2$3.$4$5$6.$7000000';

export interface HerobackDumpOptions {
  /** 
   * Deletes file generated if dumps fails, defaults to "true". 
   * <br />
   * **Notice:** This is only working for the File exporter.
   */
  deleteFileOnFail?: boolean;

  /** 
   * The exporter to be used in dump processing, defaults to "file"
   */
  exporter: string | HerobackExporter;

  /**
   * The dump provider to be used.
   */
  provider?: HerobackProvider;

  /**
   * The basedir for the file in exporter, defauls to './'.
   */
  baseDir?: string;

  /**
   * The logger instace to be used.
   */
  logger?: LoggerInstance;
  uri: string;
}

export default class HerobackDump {
  protected readonly logger: LoggerInstance;
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
    return this.provider.dump();
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
  async export(options: ExportOptions = {}): Promise<Utils.InputStream> {
    const dump = await this.run();

    // Grabs exporting promise to be awaited
    const exporter = this.exporter.export(dump.stdout, { fileName: this.fileName, ...options });

    // Wrap dump child process in a promise to handle failure properly
    const exit = new Promise((resolve, reject) => {
      dump.on('error', error => {
        this.logger.error('Unknown export error', error);
        reject(error);
      });
      dump.on('exit', async code => {
        this.logger.debug('Dump child process exited', { code });
        if (code !== 0) {
          if (this.exporter instanceof FileExporter && this.options.deleteFileOnFail !== false) {
            await Utils.File.delete({ fileName: this.fileName, baseDir: this.options.baseDir })
          }
          reject(new BaseError('Unknown error in dump child process', { code }));
        } else {
          resolve();
        }
      });
    })

    // Await for both of them in parallel
    return Promise
      .all([exit, exporter])
      .then(([exitResult, exporterResult]) => exporterResult);
  }
}