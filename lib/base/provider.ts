import { ChildProcess } from "child_process";
import { Logger } from 'ts-framework-common';
import * as Utils from '../utils';
import { DumpOptions, RestoreOptions } from "./options";

export interface HerobackProviderOptions {
  uri: Utils.UriParamsSchema;
  logger?: Logger;
}

export default abstract class HerobackProvider {
  public readonly logger: Logger;
  public abstract readonly ext: string;

  constructor(public options: HerobackProviderOptions) {
    this.logger = options.logger || Logger.getInstance();
    
    // Clean the options uri undefined params
    Object.keys(this.options.uri ).forEach(key => this.options.uri [key] === undefined && delete this.options.uri [key])

    this.logger.debug(`Initializing provider for "${this.uriDefaults().protocol}" database`, {
      uri: this.uri
    });
  }

  get uri() {
    return { ...this.uriDefaults(), ...this.options.uri };
  }

  public abstract uriDefaults(): Partial<Utils.UriParamsSchema>;

  public async abstract dump(options?: DumpOptions): Promise<ChildProcess>;

  public async abstract restore(dump: Utils.InputStream, options: RestoreOptions): Promise<ChildProcess>;

}