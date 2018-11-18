import { ChildProcess, spawn } from 'child_process';
import { DumpOptions, HerobackProvider, RestoreOptions } from '../base';
import * as Utils from '../utils';


export default class PostgresProvider extends HerobackProvider {
  ext = '.sql';

  public uriDefaults(): Partial<Utils.UriParamsSchema> {
    return {
      protocol: 'postgresql',
      host: 'localhost',
      port: '5432',
    }
  };

  /**
   * Dumps the desired database using pg_dump child process.
   */
  public async dump(options: DumpOptions = {}): Promise<ChildProcess> {
    const args = [
      `--host=${this.uri.host}`,
      `--port=${this.uri.port}`,
      `--dbname=${this.uri.database}`,
    ];

    if (this.uri.username) {
      args.push(`--username=${this.uri.username}`);
    }

    let child;

    if (this.uri.password) {
      args.push(`--password`);
      child = spawn('bash');
      child.stdin.end(`$(echo ${this.uri.password + '\n'} | pg_dump ${args.join(' ')})`);
    } else {
      child = spawn('pg_dump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
    }

    return child;
  }

  public async restore(dump: Utils.InputStream, options: RestoreOptions): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => dump.on('open', async () => {
      const args = [
        `${this.uri.database}`,
        `--host=${this.uri.host}`,
        `--port=${this.uri.port}`,
      ];
  
      if (this.uri.username) {
        args.push(`--username=${this.uri.username}`);
      }

      const child = spawn('psql', args, { stdio: ['pipe', 'pipe', 'inherit'] });
      dump.pipe(child.stdin);
      child.on('exit', () => resolve(true));
    }));
  }
}