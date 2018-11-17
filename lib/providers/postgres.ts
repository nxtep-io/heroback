import { ChildProcess, spawn } from 'child_process';
import { WriteStream } from 'fs';
import HerobackDump from "../dump";
import HerobackProvider, { DumpOptions } from "./base";
import { Writable } from 'stream';


export default class PostgresProvider extends HerobackProvider {
  /**
   * Dumps the desired database using pg_dump child process.
   */
  public async dump(options: DumpOptions): Promise<ChildProcess> {
    const args = [
      `--host=${options.uri.host}`,
      `--port=${options.uri.port}`,
      `--dbname=${options.uri.database}`,
    ];

    if (options.uri.username) {
      args.push(`--username=${options.uri.username}`);
    }

    let child;

    if (options.uri.password) {
      args.push(`--password`);
      child = spawn('bash');
      child.stdin.end(`$(echo ${options.uri.password + '\n'} | pg_dump ${args.join(' ')})`);
    } else {
      child = spawn('pg_dump', args, { stdio: ['ignore', 'pipe', 'inherit'] });
    }

    return child;
  }

  public async restore(dump: HerobackDump): Promise<boolean> {
    return false;
  }
}