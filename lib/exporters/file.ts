import * as Utils from '../utils';
import HerobackExporter, { ExportOptions } from "./base";
import { ChildProcess } from 'child_process';

export default class FileExporter extends HerobackExporter {
  public async export(dump: ChildProcess, options: ExportOptions): Promise<boolean> {
    await Utils.Stream.write(dump.stdout, { filepath: options.fileName });
    return true;
  }
}