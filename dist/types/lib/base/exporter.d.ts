import { LoggerInstance } from "ts-framework-common";
import { InputStream } from "../utils";
import { ExportOptions } from "./options";
export interface HerobackExporterOptions {
    logger?: LoggerInstance;
}
export default abstract class HerobackExporter {
    readonly name: string;
    readonly logger: LoggerInstance;
    constructor(name: string, options?: HerobackExporterOptions);
    abstract export(dump: InputStream, options: ExportOptions): Promise<InputStream>;
}
