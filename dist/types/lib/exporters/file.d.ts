/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { ExportOptions, HerobackExporter } from '../base';
import * as Utils from '../utils';
export default class FileExporter extends HerobackExporter {
    export(dump: ChildProcess, options: ExportOptions): Promise<Utils.InputStream>;
}
