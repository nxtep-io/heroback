import { Storage } from '@google-cloud/storage';
import { HerobackExporter, HerobackExporterOptions } from '../../base';
import { InputStream } from '../../utils';
export interface GoogleGCSExporterOptions extends HerobackExporterOptions {
    bucketName?: string;
    fileName?: string;
}
export default class GoogleGCSExporter extends HerobackExporter {
    options: GoogleGCSExporterOptions;
    protected readonly gcs: Storage;
    constructor(options?: GoogleGCSExporterOptions);
    export(dump: InputStream): Promise<InputStream>;
}
