import { ChildProcess } from 'child_process';
import { Storage } from '@google-cloud/storage';
import { HerobackExporter, ExportOptions } from "../exporters";

export interface GoogleGCSExportOptions extends ExportOptions {
  bucketName: string;
}

export default class GoogleGCSExporter extends HerobackExporter {
  protected readonly gcs: Storage;

  constructor() {
    super();
    // Creates a client
    this.gcs = new Storage({ projectId: process.env.GOOGLE_PROJECT_ID });
  }

  public async export(dump: ChildProcess, options: GoogleGCSExportOptions): Promise<boolean> {
    await this.gcs.bucket(options.bucketName).pipe(dump);
    return true;
  }
}