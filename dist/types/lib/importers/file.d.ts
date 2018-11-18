import { HerobackImporter, ImportOptions } from '../base';
import * as Utils from '../utils';
export default class FileImporter extends HerobackImporter {
    import(options: ImportOptions): Promise<Utils.InputStream>;
}
