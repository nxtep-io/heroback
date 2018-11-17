import Heroback from "../lib";
import AmazonS3Exporter from '../lib/third-party/amazon-s3';

export default class HerobackSample {
  public static async execute() {
    const heroback = new Heroback();

    // Prepare a heroback dump instance
    const dump = await heroback.dump({
      provider: 'postgres',
      uri: 'bitcapital_core',

      // Remember to set the required ENV variables for the official AWS SDK
      // https://aws.amazon.com/sdk-for-node-js/
      exporter: new AmazonS3Exporter({ bucketName: 'sample-pg' }),
    });

    // Dump to AWS S3 directly using streams
    await dump.export();
  }
}

// Execute the dump catching any exceptions that may be thrown
HerobackSample.execute().catch(exception => {
  console.error(exception);
  process.exit(-1);
});