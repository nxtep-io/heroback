import Heroback from ".";

export default class HerobackSample {
  public static async execute() {
    const heroback = new Heroback();

    const dump = await heroback.dump({
      gzip: false,
      provider: 'postgres',
      exporter: 'file',
      dbName: 'bitcapital_core',
    });

    const result = await dump.export();
    console.log('Dumped!', result);
  }
}

HerobackSample.execute().catch(exception => {
  console.error(exception);
  process.exit(-1);
});