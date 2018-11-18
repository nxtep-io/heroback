import { ChildProcess } from "child_process";
import { ExportOptions } from "./options";

export default abstract class HerobackExporter {

  public async abstract export(dump: ChildProcess, options: ExportOptions): Promise<boolean>;

}