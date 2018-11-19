/// <reference types="node" />
import { ChildProcess } from "child_process";
import { Logger } from "ts-framework-common";
import { ExportOptions } from "./options";
import { InputStream } from "../utils";
export interface HerobackExporterOptions {
    logger?: Logger;
}
export default abstract class HerobackExporter {
    readonly name: string;
    readonly logger: Logger;
    constructor(name: string, options?: HerobackExporterOptions);
    abstract export(dump: ChildProcess, options: ExportOptions): Promise<InputStream>;
}
