import { HerobackImporter, ImportOptions } from '../base';
import * as Utils from '../utils';

export default class FileImporter extends HerobackImporter {
  public async import(options: ImportOptions): Promise<Utils.InputStream> {
    return Utils.Stream.read({ fileName: options.fileName, baseDir: options.baseDir });
  }
}