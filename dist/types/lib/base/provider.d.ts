/// <reference types="node" />
import { ChildProcess } from "child_process";
import { Logger } from 'ts-framework-common';
import * as Utils from '../utils';
import { DumpOptions, RestoreOptions } from "./options";
export interface HerobackProviderOptions {
    uri: Utils.UriParamsSchema;
    logger?: Logger;
}
export default abstract class HerobackProvider {
    options: HerobackProviderOptions;
    readonly logger: Logger;
    abstract readonly ext: string;
    constructor(options: HerobackProviderOptions);
    readonly uri: {
        host: string;
        port: string;
        database: string;
        username: string;
        password: string;
        protocol: string;
    };
    abstract uriDefaults(): Partial<Utils.UriParamsSchema>;
    abstract dump(options?: DumpOptions): Promise<ChildProcess>;
    abstract restore(dump: Utils.InputStream, options: RestoreOptions): Promise<boolean>;
}
