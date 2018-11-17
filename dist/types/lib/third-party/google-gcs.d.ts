/// <reference types="node" />
import { Storage } from '@google-cloud/storage';
import { ChildProcess } from 'child_process';
import { ExportOptions, HerobackExporter } from '../base';
export interface GoogleGCSExporterOptions extends ExportOptions {
    bucketName: string;
}
export default class GoogleGCSExporter extends HerobackExporter {
    options: GoogleGCSExporterOptions;
    protected readonly gcs: Storage;
    constructor(options: GoogleGCSExporterOptions);
    export(dump: ChildProcess, options: ExportOptions): Promise<boolean>;
}
