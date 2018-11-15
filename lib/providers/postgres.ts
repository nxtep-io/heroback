import { ChildProcess, spawn } from 'child_process';
import { BaseError } from 'ts-framework-common';
import * as Utils from '../utils';
import HerobackDump from "../dump";
import HerobackProvider, { DumpOptions } from "../provider";


export default class PostgresProvider extends HerobackProvider {
  constructor() {
    super();
  }

  public async dump(options: DumpOptions): Promise<ChildProcess> {
    // Spawn pg_dump child process and handle error codes
    const pgDumpChild = spawn('pg_dump', [options.dbName], { stdio: ['ignore', 'pipe', 'inherit'] });

    // Optionally, compress with GZIP
    if (options.gzip) {
      const gzipChild = Utils.Stream.gzip(pgDumpChild.stdout);
      return gzipChild;
    }

    return pgDumpChild;
  }

  public async restore(dump: HerobackDump): Promise<boolean> {
    return false;
  }
}