import { ChildProcess, spawn } from 'child_process';
import HerobackDump from "../dump";
import HerobackProvider, { DumpOptions } from "./base";


export default class PostgresProvider extends HerobackProvider {
  public async dump(options: DumpOptions): Promise<ChildProcess> {
    // Spawn pg_dump child process and handle error codes
    return spawn('pg_dump', [options.dbName], { stdio: ['ignore', 'pipe', 'inherit'] });
  }

  public async restore(dump: HerobackDump): Promise<boolean> {
    return false;
  }
}