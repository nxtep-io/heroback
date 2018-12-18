import { Logger, LoggerInstance } from "ts-framework-common";
import { InputStream } from "../utils";
import { ExportOptions } from "./options";

export interface HerobackExporterOptions {
  logger?: LoggerInstance;
}

export default abstract class HerobackExporter {
  public readonly logger: LoggerInstance;

  constructor(public readonly name: string, options: HerobackExporterOptions = {}) {
    this.logger = options.logger || Logger.getInstance();
    this.logger.debug(`Initializing exporter for "${this.name}"`);
  }

  public async abstract export(dump: InputStream, options: ExportOptions): Promise<InputStream>;

}