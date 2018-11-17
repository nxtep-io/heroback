import Heroback from "../lib";
import GoogleGCSExporter from '../lib/third-party/google-gcs';

export default class HerobackSample {
  public static async execute() {
    const heroback = new Heroback();

    // Prepare a heroback dump instance
    const dump = await heroback.dump({
      provider: 'postgres',
      uri: 'bitcapital_core',

      // Remember to set the required ENV variables for the official GCS SDK
      exporter: new GoogleGCSExporter({ bucketName: 'sample-pg' }),
    });

    // Dump to Google GCS directly using streams
    await dump.export();
  }
}

// Execute the dump catching any exceptions that may be thrown
HerobackSample.execute().catch(exception => {
  console.error(exception);
  process.exit(-1);
});