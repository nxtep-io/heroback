import { ChildProcess } from "child_process";

export interface ExportOptions {
  fileName?: string;
  baseDir?: string;
}

export default abstract class HerobackExporter {

  public async abstract export(dump: ChildProcess, options: ExportOptions): Promise<boolean>;

}