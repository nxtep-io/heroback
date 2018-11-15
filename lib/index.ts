import HerobackDump, { HerobackDumpOptions } from './dump';

export default class Heroback {
  public async dump(options: HerobackDumpOptions): Promise<HerobackDump> {
    return new HerobackDump(options);
  }
}