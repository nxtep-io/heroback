import { HerobackProvider, RestoreOptions } from './base';
import { InputStream } from './utils';
export interface HerobackRestoreOptions {
    provider: string | HerobackProvider;
    baseDir?: string;
    gzip?: boolean;
    uri: string;
}
export default class HerobackRestore {
    readonly options: HerobackRestoreOptions;
    protected readonly provider: HerobackProvider;
    constructor(options: HerobackRestoreOptions);
    private static initializeProvider;
    run(dump: InputStream, options?: RestoreOptions): Promise<boolean>;
}
