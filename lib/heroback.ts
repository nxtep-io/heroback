import { Logger } from 'ts-framework-common';
import HerobackDump, { HerobackDumpOptions } from './dump';

export interface HerobackOptions {
  logger?: Logger;
}

export default class Heroback {
  public readonly logger: Logger;

  constructor(public options: HerobackOptions = {}) {
    this.logger = options.logger || Logger.getInstance();
  }

  public async dump(options: HerobackDumpOptions): Promise<HerobackDump> {
    return new HerobackDump(options);
  }
}