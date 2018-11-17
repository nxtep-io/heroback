/// <reference types="node" />
import { ChildProcess } from "child_process";
import HerobackDump from "../dump";
import * as Utils from '../utils';
export interface DumpOptions {
}
export interface HerobackProviderOptions {
    uri: Utils.UriParamsSchema;
}
export default abstract class HerobackProvider {
    options: HerobackProviderOptions;
    abstract uriDefaults: Partial<Utils.UriParamsSchema>;
    constructor(options: HerobackProviderOptions);
    readonly uri: {
        host: string;
        port: string;
        database: string;
        username: string;
        password: string;
        protocol: string;
    };
    abstract dump(options?: DumpOptions): Promise<ChildProcess>;
    abstract restore(dump: HerobackDump): Promise<boolean>;
}
