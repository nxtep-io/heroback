import { Logger } from 'ts-framework-common';
import { HerobackProvider, RestoreOptions } from './base';
import { InputStream } from './utils';
export interface HerobackRestoreOptions {
    provider: string | HerobackProvider;
    baseDir?: string;
    logger?: Logger;
    gzip?: boolean;
    uri: string;
}
export default class HerobackRestore {
    readonly options: HerobackRestoreOptions;
    protected readonly logger: Logger;
    protected readonly provider: HerobackProvider;
    constructor(options: HerobackRestoreOptions);
    private static initializeProvider;
    import(dump: InputStream, options?: RestoreOptions): Promise<boolean>;
}
