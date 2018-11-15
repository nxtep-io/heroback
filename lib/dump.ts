
import * as Utils from './utils';
import { PostgresProvider } from './providers';

export const CLEAN_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
export const CLEAN_REGEX_SUBSTITUTION = '$1$2$3.$4$5$6.$7000000';

export interface HerobackDumpOptions {
  dbName: string;
  raw?: string;
}

export default class HerobackDump {
  raw?: string;
  dbName: string;
  timestamp: Date;

  constructor(options: HerobackDumpOptions) {
    this.dbName = options.dbName;
    this.timestamp = new Date()
  }

  get fileName(): string {
    const clean = this.timestamp.toISOString().replace(CLEAN_REGEX, CLEAN_REGEX_SUBSTITUTION);
    return `${clean}.sql.gz`;
  }

  async write(): Promise<HerobackDump> {
    const pg = new PostgresProvider();

    // Get raw dump
    const dump = await pg.dump({ dbName: this.dbName });
    this.raw = await Utils.Stream.stringify(dump.stdout);

    return this;
  }
}