import { ChildProcess, spawn } from 'child_process';
import { HerobackProvider } from '../base';
import * as Utils from '../utils';


export default class MySQLProvider extends HerobackProvider {
  ext = '.sql';

  public uriDefaults(): Partial<Utils.UriParamsSchema> {
    return {
      protocol: 'mysql',
      host: 'localhost',
      port: '3306',
    }
  };

  /**
   * Dumps the desired database using mysqldump child process.
   */
  public async dump(): Promise<ChildProcess> {
    const args = [
      `--host=${this.uri.host}`,
      `--port=${this.uri.port}`,
      `${this.uri.database}`,
    ];

    if (this.uri.username) {
      args.push(`--user=${this.uri.username}`);
    }

    if (this.uri.password) {
      args.push(`--password=${this.uri.password}`);
    }


    this.logger.debug('Dumping using "mysqldump" binary', { args });
    return spawn('mysqldump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
  }

  /**
   * Restores the dump to the desired database using apsql child process.
   */
  public async restore(dump: Utils.InputStream): Promise<ChildProcess> {
    throw new Error("Method not implemented for MySQL");
  }
}