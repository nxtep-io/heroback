import { BaseError } from "ts-framework-common";
import { HerobackProvider } from "../base";
import { FileExporter } from "../exporters";
import { MongoProvider, PostgresProvider } from "../providers";
import * as Utils from "../utils";
import HerobackExporter from "./exporter";
import { HerobackDumpOptions } from "../dump";

export const providerFactory = (options: HerobackDumpOptions): HerobackProvider => {
  const uri = Utils.Uri.parse(options.uri);

  if (uri.protocol === 'postgresql') {
    return new PostgresProvider({ uri });
  }
  if (uri.protocol === 'mongo') {
    return new MongoProvider({ uri });
  }
  throw new BaseError(`Unknown database provider: "${uri.protocol || undefined}"`, { uri });
}

export const exporterFactory = (name: string): HerobackExporter => {
  if (name === 'file') {
    return new FileExporter();
  }
  throw new BaseError(`Unknown exporter: "${name}"`, { exporter: name });
}