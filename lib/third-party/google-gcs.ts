import { Storage } from '@google-cloud/storage';
import { ChildProcess } from 'child_process';
import { ExportOptions, HerobackExporter } from '../base';

export interface GoogleGCSExporterOptions extends ExportOptions {
  bucketName: string;
}

export default class GoogleGCSExporter extends HerobackExporter {
  protected readonly gcs: Storage;

  constructor(public options: GoogleGCSExporterOptions) {
    super();

    // Creates a client
    this.gcs = new Storage({ projectId: process.env.GOOGLE_PROJECT_ID });
  }

  public async export(dump: ChildProcess, options: ExportOptions): Promise<boolean> {
    await this.gcs.bucket(this.options.bucketName).pipe(dump);
    return true;
  }
}