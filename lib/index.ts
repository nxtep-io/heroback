import HerobackDump, { HerobackDumpOptions } from './dump';

export default class Heroback {
  public async dump(options: HerobackDumpOptions): Promise<HerobackDump> {
    return new HerobackDump(options);
  }
}

(async () => {
  try {
    const dump = await (new Heroback().dump({ dbName: 'bitcapital_core' }));
    const result = await dump.write();
    console.log('Dumped!', result);
  } catch (exception) {
    console.error(exception);
    process.exit(-1);
  }
})();
