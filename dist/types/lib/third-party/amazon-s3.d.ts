/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { ExportOptions, HerobackExporter } from '../base';
export interface AmazonS3ExporterOptions extends ExportOptions {
    bucketName: string;
}
export default class AmazonS3Exporter extends HerobackExporter {
    options: AmazonS3ExporterOptions;
    protected readonly s3: AWS.S3;
    constructor(options: AmazonS3ExporterOptions);
    export(dump: ChildProcess, options: ExportOptions): Promise<boolean>;
}
