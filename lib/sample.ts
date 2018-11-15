import Heroback from ".";

export default class HerobackSample {
  public static async execute() {
    const heroback = new Heroback();
    
    const dump = await heroback.dump({ 
      gzip: true,
      provider: 'postgres',
      dbName: 'bitcapital_core',
    });

    const result = await dump.write();
    console.log('Dumped!', result);
  }
}

HerobackSample.execute().catch(exception => {
  console.error(exception);
  process.exit(-1);
});