import { ChildProcess } from "child_process";
import { Logger, LoggerInstance } from 'ts-framework-common';
import * as Utils from '../utils';

export interface HerobackProviderOptions {
  uri: Utils.UriParamsSchema;
  logger?: LoggerInstance;
}

export default abstract class HerobackProvider {
  public readonly logger: LoggerInstance;
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

  public async abstract dump(): Promise<ChildProcess>;

  public async abstract restore(dump: Utils.InputStream): Promise<ChildProcess>;

  public async migrate(): Promise<ChildProcess> {
    const dump = await this.dump();
    return this.restore(dump.stdout);
  }

}