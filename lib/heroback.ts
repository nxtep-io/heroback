import { Logger } from 'ts-framework-common';
import HerobackDump, { HerobackDumpOptions } from './dump';
import HerobackRestore, { HerobackRestoreOptions } from './restore';

export interface HerobackOptions {
  logger?: Logger;
  gzip?: boolean;
  baseDir?: string;
}

export default class Heroback {
  public readonly logger: Logger;

  constructor(public options: HerobackOptions = {}) {
    this.logger = options.logger || Logger.getInstance();
  }

  public async dump(options: HerobackDumpOptions): Promise<HerobackDump> {
    return new HerobackDump({
      gzip: this.options.gzip,
      baseDir: this.options.baseDir,
      ...options
    });
  }

  public async restore(options: HerobackRestoreOptions): Promise<HerobackRestore> {
    return new HerobackRestore({
      gzip: this.options.gzip,
      baseDir: this.options.baseDir,
      ...options
    });
  }
}