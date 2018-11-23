import { ExportOptions, HerobackExporter, HerobackExporterOptions } from '../base';
import * as Utils from '../utils';

export default class FileExporter extends HerobackExporter {
  constructor(options: HerobackExporterOptions = {}) {
    super('file', options);
  }

  public async export(dump: Utils.InputStream, options: ExportOptions): Promise<Utils.InputStream> {
    return Utils.Stream.write(dump, { fileName: options.fileName, baseDir: options.baseDir });
  }
}