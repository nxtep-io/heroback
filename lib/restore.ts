
import { Logger } from 'ts-framework-common';
import { HerobackProvider, providerFactory, RestoreOptions } from './base';
import * as Providers from './providers';
import { InputStream } from './utils';

export interface HerobackRestoreOptions {
  provider: string | HerobackProvider;
  baseDir?: string;
  logger?: Logger;
  gzip?: boolean;
  uri: string;
}

export default class HerobackRestore {
  protected readonly logger: Logger;
  protected readonly provider: HerobackProvider;

  constructor(public readonly options: HerobackRestoreOptions) {
    this.logger = options.logger || Logger.getInstance();
    this.provider = HerobackRestore.initializeProvider(options);
  }

  private static initializeProvider(options: HerobackRestoreOptions): HerobackProvider {
    let provider;

    if (options.provider instanceof HerobackProvider) {
      provider = options.provider;
    } else {
      provider = providerFactory(options, Providers);
    }

    return provider;
  }

  public async import(dump: InputStream, options: RestoreOptions = {}): Promise<boolean> {
    const result = await this.provider.restore(dump, options);
    return new Promise<boolean>((resolve, reject) => {
      result.on('error', exception => reject(exception));
      result.on('exit', () => resolve(true));
    });
  }
}