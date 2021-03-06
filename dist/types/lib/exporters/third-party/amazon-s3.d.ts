import { ExportOptions, HerobackExporter, HerobackExporterOptions } from '../../base';
import { InputStream } from '../../utils';
export interface AmazonS3ExporterOptions extends HerobackExporterOptions {
    bucketName?: string;
}
export default class AmazonS3Exporter extends HerobackExporter {
    options: AmazonS3ExporterOptions;
    protected readonly s3: AWS.S3;
    constructor(options?: AmazonS3ExporterOptions);
    export(dump: InputStream, options: ExportOptions): Promise<InputStream>;
}
