
import { HerobackProvider, providerFactory, RestoreOptions } from './base';
import * as Providers from './providers';
import { InputStream } from './utils';

export interface HerobackRestoreOptions {
  provider: string | HerobackProvider;
  baseDir?: string;
  gzip?: boolean;
  uri: string;
}

export default class HerobackRestore {
  protected readonly provider: HerobackProvider;

  constructor(public readonly options: HerobackRestoreOptions) {
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

  public async run(dump: InputStream, options: RestoreOptions = {}): Promise<boolean> {
    return this.provider.restore(dump, options);
  }
}