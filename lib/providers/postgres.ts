import { ChildProcess, spawn } from 'child_process';
import { DumpOptions, HerobackProvider } from '../base';
import HerobackDump from "../dump";
import { UriParamsSchema } from '../utils';


export default class PostgresProvider extends HerobackProvider {
  ext = '.sql';

  public uriDefaults(): Partial<UriParamsSchema> {
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

  public async restore(dump: HerobackDump): Promise<boolean> {
    return false;
  }
}