import { ChildProcess } from 'child_process';
import { ExportOptions, HerobackExporter, HerobackExporterOptions } from '../base';
import * as Utils from '../utils';

export default class FileExporter extends HerobackExporter {
  constructor(options: HerobackExporterOptions = {}) {
    super('file', options);
  }
  
  public async export(dump: ChildProcess, options: ExportOptions): Promise<Utils.InputStream> {
    return Utils.Stream.write(dump.stdout, { fileName: options.fileName, baseDir: options.baseDir });
  }
}