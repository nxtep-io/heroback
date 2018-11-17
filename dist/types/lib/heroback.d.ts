import { Logger } from 'ts-framework-common';
import HerobackDump, { HerobackDumpOptions } from './dump';
export interface HerobackOptions {
    logger?: Logger;
}
export default class Heroback {
    options: HerobackOptions;
    readonly logger: Logger;
    constructor(options?: HerobackOptions);
    dump(options: HerobackDumpOptions): Promise<HerobackDump>;
}
