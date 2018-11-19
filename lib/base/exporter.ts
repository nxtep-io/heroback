import { ChildProcess } from "child_process";
import { Logger } from "ts-framework-common";
import { ExportOptions } from "./options";
import { InputStream } from "../utils";

export interface HerobackExporterOptions {
  logger?: Logger
}

export default abstract class HerobackExporter {
  public readonly logger: Logger;

  constructor(public readonly name: string, options: HerobackExporterOptions = {}) {
    this.logger = options.logger || Logger.getInstance();
    this.logger.debug(`Initializing exporter for "${this.name}"`);
  }

  public async abstract export(dump: ChildProcess, options: ExportOptions): Promise<InputStream>;

}