import { ExportOptions, HerobackExporter, HerobackExporterOptions } from '../base';
import * as Utils from '../utils';
export default class FileExporter extends HerobackExporter {
    constructor(options?: HerobackExporterOptions);
    export(dump: Utils.InputStream, options: ExportOptions): Promise<Utils.InputStream>;
}
