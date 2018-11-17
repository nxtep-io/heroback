#!/usr/bin/env node

import * as program from 'commander';
import * as Package from 'pjson';
import Heroback from '../lib';

export default class HerobackBin {
  protected static readonly program: program.Command = program.version(Package.version);

  public static init() {
    // Prepare dump command
    this.program
      .command('dump <uri>', 'Dumps a database based on its URI')
      .option('-d, --dest [path]', 'The destination directory for the dump [Defaults to cwd]')
      .option('-p, --provider [provider]', 'Uses specific database provider [Defaults to postgres]')
      .option('-e, --exporter [exporter]', 'Uses specific dump exporter [Defaults to file]')
      .option('-z, --no-gzip', 'Disables GZIP compression of the dump file')
      .action(async (uri, cmd) => this.dump(uri, cmd))

    this.program.parse(process.argv);
  }

  public static async dump(uri, cmd) {
    const heroback = new Heroback();

    // Prepare a heroback dump instance
    try {
      const dump = await heroback.dump({
        uri,
        gzip: !cmd.gzip,
        baseDir: cmd.path || process.cwd(),
        exporter: cmd.exporter || 'file',
        provider: cmd.provider || 'postgres',
      });

      // Dump to local file
      await dump.export();

      heroback.logger.info('Success!');
      process.exit(0);
    } catch (exception) {
      heroback.logger.error(exception.message);
      process.exit(-1);
    }
  }
}

HerobackBin.init();