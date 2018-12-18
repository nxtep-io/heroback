import { Logger, LoggerInstance } from 'ts-framework-common';
import HerobackDump, { HerobackDumpOptions } from './dump';
import HerobackRestore, { HerobackRestoreOptions } from './restore';

export interface HerobackOptions {
  logger?: LoggerInstance;
  gzip?: boolean;
  baseDir?: string;
}

export default class Heroback {
  public readonly logger: LoggerInstance;

  constructor(public options: HerobackOptions = {}) {
    this.logger = options.logger || Logger.getInstance();
  }

  public async dump(options: HerobackDumpOptions): Promise<HerobackDump> {
    return new HerobackDump({ baseDir: this.options.baseDir, ...options });
  }

  public async restore(options: HerobackRestoreOptions): Promise<HerobackRestore> {
    return new HerobackRestore({ baseDir: this.options.baseDir, ...options });
  }
}