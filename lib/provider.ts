import { ChildProcess } from "child_process";
import { BaseError } from "ts-framework-common";
import HerobackDump from "./dump";
import { PostgresProvider } from "./providers";

export interface DumpOptions {
  dbName: string;
  gzip?: boolean;
}

export default abstract class HerobackProvider {

  public async abstract dump(options: DumpOptions): Promise<ChildProcess>;

  public async abstract restore(dump: HerobackDump): Promise<boolean>;

}