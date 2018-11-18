import { ChildProcess, spawn } from 'child_process';
import { DumpOptions, HerobackProvider, RestoreOptions } from '../base';
import { UriParamsSchema, InputStream } from '../utils';


export default class MongoProvider extends HerobackProvider {
  ext = '.mongo';

  public uriDefaults(): Partial<UriParamsSchema> {
    return {
      protocol: 'mongo',
      host: 'localhost',
      port: '27017',
    }
  };

  /**
   * Dumps the desired database using mongodump child process.
   */
  public async dump(options: DumpOptions = {}): Promise<ChildProcess> {
    const args = [
      '--archive',
      `-d`,
      this.uri.database,
    ];

    if (this.uri.host !== this.uriDefaults().host) {
      args.push(`--host="${this.uri.host}"`);
    }

    if (this.uri.port !== this.uriDefaults().port) {
      args.push(`--port="${this.uri.port}"`, );
    }

    if (this.uri.username) {
      args.push('-u', this.uri.username);
    }

    if (this.uri.password) {
      args.push('-p', this.uri.password);
    }

    return spawn('mongodump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
  }

  public async restore(dump: InputStream, options: RestoreOptions): Promise<boolean> {
    return false;
  }
}