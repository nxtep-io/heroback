import { ChildProcess, spawn } from 'child_process';
import { HerobackProvider } from '../base';
import { InputStream, UriParamsSchema } from '../utils';


export default class MongoProvider extends HerobackProvider {
  ext = '.mongo';

  public uriDefaults(): Partial<UriParamsSchema> {
    return {
      protocol: 'mongodb',
      host: 'localhost',
      port: '27017',
    }
  };

  /**
   * Dumps the desired database using mongodump child process.
   */
  public async dump(): Promise<ChildProcess> {
    const args = ['--archive'];

    if (this.uri.host !== this.uriDefaults().host) {
      args.push(`--uri="${this.uri.raw}"`);
    }

    this.logger.debug('Dumping using "mongodump" binary', { args });
    return spawn('mongodump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
  }

  public async restore(dump: InputStream): Promise<ChildProcess> {
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

    this.logger.debug('Restoring using "mongorestore" binary', { args });
    const child = spawn('mongorestore', args, { stdio: ['pipe', 'pipe', 'inherit'] });
    dump.pipe(child.stdin);
    return child;
  }
}