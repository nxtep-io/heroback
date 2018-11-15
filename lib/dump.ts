
import { ChildProcess } from 'child_process';
import { PostgresProvider, providerFactory } from './providers';
import * as Utils from './utils';
import HerobackProvider from './provider';

export const CLEAN_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
export const CLEAN_REGEX_SUBSTITUTION = '$1$2$3.$4$5$6.$7000000';

export interface HerobackDumpOptions {
  provider: string | HerobackProvider;
  dbName: string;
  gzip?: boolean;
}

export default class HerobackDump {
  protected readonly dbName: string;
  protected readonly timestamp: Date;
  protected readonly provider: HerobackProvider;

  constructor(public options: HerobackDumpOptions) {
    this.dbName = options.dbName;
    if(typeof options.provider === typeof 'str') {
      this.provider = providerFactory(options.provider as string);
    } else {
      this.provider = options.provider as HerobackProvider;
    }
    this.timestamp = new Date()
  }

  get fileName(): string {
    const clean = this.timestamp.toISOString().replace(CLEAN_REGEX, CLEAN_REGEX_SUBSTITUTION);
    if (this.options.gzip) {
      return `${clean}.sql.gz`;
    }
    return `${clean}.sql`;
  }

  async run(): Promise<ChildProcess> {
    const dump = await this.provider.dump({ dbName: this.dbName });

    // Optionally, compress with GZIP
    if (this.options.gzip) {
      const gzipChild = Utils.Stream.gzip(dump.stdout);
      return gzipChild;
    }

    return dump;
  }

  async raw(): Promise<string> {
    const dump = await this.run();
    return Utils.Stream.stringify(dump.stdout);
  }

  async write(): Promise<void> {
    const dump = await this.run();
    await Utils.Stream.write(dump.stdout, { filepath: this.fileName });
  }
}