#!/usr/bin/env node

import * as program from 'commander';
import * as Package from 'pjson';
import Heroback from '../lib';

export default class HerobackBin {
  protected static readonly program: program.Command = program.version(Package.version);

  public static init() {
    // Prepare dump command
    this.program
      .command('dump <uri>')
      .option('-b, --base-dir [baseDir]', 'The destination directory for the dump [Defaults to cwd]')
      .option('-p, --provider [provider]', 'Uses specific database provider [Defaults to postgres]')
      .option('-e, --exporter [exporter]', 'Uses specific dump exporter [Defaults to file]')
      .option('-z, --no-gzip', 'Disables GZIP compression of the dump file')
      .action(async (uri, cmd) => this.dump(uri, cmd))

    this.program.parse(process.argv);
  }

  public static async dump(uri, cmd) {
    const heroback = new Heroback();

    // Prepare a heroback dump instance
    const dump = await heroback.dump({
      uri,
      gzip: !cmd.gzip,
      baseDir: process.cwd(),
      exporter: cmd.exporter || 'file',
      provider: cmd.provider || 'postgres',
    });

    // Dump to local file
    await dump.export();
    console.log('Dumped database to local file!');
  }
}

HerobackBin.init();