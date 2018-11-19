import { S3 } from 'aws-sdk';
import { ChildProcess } from 'child_process';
import { ExportOptions, HerobackExporter, HerobackExporterOptions } from '../../base';
import { InputStream } from '../../utils';

export interface AmazonS3ExporterOptions extends HerobackExporterOptions {
  bucketName?: string;
}

// Configure AWS credentials
// http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html
// 
// process.env.AWS_ACCESS_KEY_ID = s3AccessKeyId;
// process.env.AWS_SECRET_ACCESS_KEY = s3SecretAccessKey;
//
export default class AmazonS3Exporter extends HerobackExporter {
  protected readonly s3: AWS.S3;

  constructor(public options: AmazonS3ExporterOptions = {}) {
    super('amazon', options);

    // Define our S3 connection
    // https://aws.amazon.com/sdk-for-node-js/
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
    this.s3 = new S3();
  }

  public async export(dump: ChildProcess, options: ExportOptions): Promise<InputStream> {
    // Upload our gzip stream into S3
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
    const response = await this.s3.putObject({
      Bucket: process.env.AMAZON_BUCKET_NAME || this.options.bucketName,
      Key: options.fileName,
      ACL: 'private',
      ContentType: 'text/plain',
      ContentEncoding: 'gzip',
      Body: dump.stdout,
    });

    return response.createReadStream();
  }
}