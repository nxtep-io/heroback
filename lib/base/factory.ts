import { BaseError } from "ts-framework-common";
import { HerobackProvider } from "../base";
import { AmazonS3Exporter, FileExporter, GoogleGCSExporter } from "../exporters";
import * as Utils from "../utils";
import HerobackExporter from "./exporter";

export const providerFactory = (options: { uri: string }, providers: any): HerobackProvider => {
  const uri = Utils.Uri.parse(options.uri);

  if (uri.protocol === 'postgresql') {
    return new providers.PostgresProvider({ uri });
  }

  if (uri.protocol === 'mysql') {
    return new providers.MySQLProvider({ uri });
  }

  if (uri.protocol === 'mongo' || uri.protocol === 'mongodb') {
    return new providers.MongoProvider({ uri });
  }

  throw new BaseError(`Unknown database provider: "${uri.protocol || undefined}"`, { uri });
}

export const exporterFactory = (name: string): HerobackExporter => {
  if (name === 'file') {
    return new FileExporter();
  }
  if (name === 'google') {
    return new GoogleGCSExporter();
  }
  if (name === 'amazon') {
    return new AmazonS3Exporter();
  }
  throw new BaseError(`Unknown exporter: "${name}"`, { exporter: name });
}