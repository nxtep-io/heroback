import { BaseError } from "ts-framework-common";
import HerobackExporter from "./base";
import FileExporter from "./file";

export const exporterFactory = (name: string): HerobackExporter => {
  if (name === 'file') {
    return new FileExporter();
  }
  throw new BaseError(`Unknown exporter: "${name}"`, { exporter: name });
}