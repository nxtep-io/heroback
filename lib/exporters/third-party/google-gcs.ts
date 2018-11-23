import * as uuid from 'uuid';
import { Storage } from '@google-cloud/storage';
import { ChildProcess } from 'child_process';
import { HerobackExporter, HerobackExporterOptions } from '../../base';
import { InputStream } from '../../utils';

export interface GoogleGCSExporterOptions extends HerobackExporterOptions {
  bucketName?: string;
  fileName?: string;
}

export default class GoogleGCSExporter extends HerobackExporter {
  protected readonly gcs: Storage;

  constructor(public options: GoogleGCSExporterOptions = {}) {
    super('google', options);

    // Creates a client
    this.gcs = new Storage({ projectId: process.env.GOOGLE_PROJECT_ID });
  }

  public async export(dump: InputStream): Promise<InputStream> {
    const bucket = this.gcs.bucket(process.env.GOOGLE_BUCKET_NAME || this.options.bucketName);
    const file = bucket.file(this.options.fileName || uuid.v4());
    const writeStream = file.createWriteStream();

    dump.pipe(writeStream);
    return new Promise<InputStream>((resolve, reject) => {
      writeStream.on('error', error => reject(error));
      dump.on('error', error => reject(error));
      dump.on('end', () => resolve(writeStream));
    });
  }
}