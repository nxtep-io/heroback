import { LoggerInstance } from 'ts-framework-common';
import HerobackDump, { HerobackDumpOptions } from './dump';
import HerobackRestore, { HerobackRestoreOptions } from './restore';
export interface HerobackOptions {
    logger?: LoggerInstance;
    gzip?: boolean;
    baseDir?: string;
}
export default class Heroback {
    options: HerobackOptions;
    readonly logger: LoggerInstance;
    constructor(options?: HerobackOptions);
    dump(options: HerobackDumpOptions): Promise<HerobackDump>;
    restore(options: HerobackRestoreOptions): Promise<HerobackRestore>;
}
