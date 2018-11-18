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

    this.logger.debug('Dumping using "pg_dump" binary', { args });

    if (this.uri.password) {
      child = spawn(`PGPASSWORD="${this.uri.password}" pg_dump`, args, {
        shell: true,
        stdio: ['ignore', 'pipe', 'inherit']
      });
    } else {
      child = spawn('pg_dump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
    }

    return child;
  }

  /**
   * Restores the dump to the desired database using apsql child process.
   */
  public async restore(dump: Utils.InputStream, options: RestoreOptions): Promise<ChildProcess> {
    return new Promise<ChildProcess>(async (resolve, reject) => dump.on('open', async () => {
      const args = [
        `${this.uri.database}`,
        `--host=${this.uri.host}`,
        `--port=${this.uri.port}`,
      ];

      if (this.uri.username) {
        args.push(`--username=${this.uri.username}`);
      }

      let child;

      this.logger.debug('Restoring using "psql" binary', { args });

      if (this.uri.password) {
        child = spawn(`PGPASSWORD="${this.uri.password}" psql`, args, {
          shell: true,
          stdio: ['ignore', 'pipe', 'inherit']
        });
      } else {
        child = spawn('psql', args, { stdio: ['ignore', 'pipe', 'inherit'] });
      }

      resolve(child);
    }));
  }
}