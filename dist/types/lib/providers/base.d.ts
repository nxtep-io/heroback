/// <reference types="node" />
import { ChildProcess } from "child_process";
import HerobackDump from "../dump";
import * as Utils from '../utils';
export interface DumpOptions {
    uri: Utils.UriParamsSchema;
    gzip?: boolean;
}
export default abstract class HerobackProvider {
    abstract dump(options: DumpOptions): Promise<ChildProcess>;
    abstract restore(dump: HerobackDump): Promise<boolean>;
}
