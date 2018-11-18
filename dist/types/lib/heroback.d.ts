import { Logger } from 'ts-framework-common';
import HerobackDump, { HerobackDumpOptions } from './dump';
import HerobackRestore, { HerobackRestoreOptions } from './restore';
export interface HerobackOptions {
    logger?: Logger;
    gzip?: boolean;
    baseDir?: string;
}
export default class Heroback {
    options: HerobackOptions;
    readonly logger: Logger;
    constructor(options?: HerobackOptions);
    dump(options: HerobackDumpOptions): Promise<HerobackDump>;
    restore(options: HerobackRestoreOptions): Promise<HerobackRestore>;
}
