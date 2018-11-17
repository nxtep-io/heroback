import HerobackDump, { HerobackDumpOptions } from './dump';
export default class Heroback {
    dump(options: HerobackDumpOptions): Promise<HerobackDump>;
}
