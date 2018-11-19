/// <reference types="node" />
import { Storage } from '@google-cloud/storage';
import { ChildProcess } from 'child_process';
import { HerobackExporter, HerobackExporterOptions } from '../../base';
import { InputStream } from '../../utils';
export interface GoogleGCSExporterOptions extends HerobackExporterOptions {
    bucketName?: string;
}
export default class GoogleGCSExporter extends HerobackExporter {
    options: GoogleGCSExporterOptions;
    protected readonly gcs: Storage;
    constructor(options?: GoogleGCSExporterOptions);
    export(dump: ChildProcess): Promise<InputStream>;
}
