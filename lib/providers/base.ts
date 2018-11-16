import { ChildProcess } from "child_process";
import HerobackDump from "../dump";

export interface DumpOptions {
  dbName: string;
  gzip?: boolean;
}

export default abstract class HerobackProvider {

  public async abstract dump(options: DumpOptions): Promise<ChildProcess>;

  public async abstract restore(dump: HerobackDump): Promise<boolean>;

}