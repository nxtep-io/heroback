/// <reference types="node" />
import HerobackExporter, { ExportOptions } from "./base";
import { ChildProcess } from 'child_process';
export default class FileExporter extends HerobackExporter {
    export(dump: ChildProcess, options: ExportOptions): Promise<boolean>;
}
