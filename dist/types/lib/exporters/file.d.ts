/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { ExportOptions, HerobackExporter, HerobackExporterOptions } from '../base';
import * as Utils from '../utils';
export default class FileExporter extends HerobackExporter {
    constructor(options?: HerobackExporterOptions);
    export(dump: ChildProcess, options: ExportOptions): Promise<Utils.InputStream>;
}
