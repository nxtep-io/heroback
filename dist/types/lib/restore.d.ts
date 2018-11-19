/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { Logger } from 'ts-framework-common';
import { HerobackProvider } from './base';
import { InputStream } from './utils';
export interface HerobackRestoreOptions {
    provider?: HerobackProvider;
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
    import(dump: InputStream): Promise<ChildProcess>;
}
