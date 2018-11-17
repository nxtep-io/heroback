import Heroback from "../lib";

export default class HerobackSample {
  public static async execute() {
    const heroback = new Heroback();

    // Prepare a heroback dump instance
    const dump = await heroback.dump({
      gzip: false,
      exporter: 'file',
      provider: 'postgres',
      uri: 'bitcapital_core',
    });

    // Dump to local file
    await dump.export();
  }
}

// Execute the dump catching any exceptions that may be thrown
HerobackSample.execute().catch(exception => {
  console.error(exception);
  process.exit(-1);
});