import { Logger } from "ts-framework-common";
import { InputStream } from "../utils";
import { ExportOptions } from "./options";
export interface HerobackExporterOptions {
    logger?: Logger;
}
export default abstract class HerobackExporter {
    readonly name: string;
    readonly logger: Logger;
    constructor(name: string, options?: HerobackExporterOptions);
    abstract export(dump: InputStream, options: ExportOptions): Promise<InputStream>;
}
