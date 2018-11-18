#!/usr/bin/env node

import * as program from 'commander';
import * as Package from 'pjson';
import Heroback, { Stream } from '../lib';

export default class HerobackBin {
  protected static readonly heroback = new Heroback();
  protected static readonly program: program.Command = program.version(Package.version);

  public static init() {
    // Prepare dump command
    this.program
      .command('dump <uri>')
      .option('-d, --dest [path]', 'The destination directory for the dump [Defaults to cwd]')
      .option('-z, --no-gzip', 'Disables GZIP compression of the dump file')
      .action(async (uri: string, cmd) => this.dump(uri, cmd));


    // Prepare restore command
    this.program
      .command('restore <file> <uri>')
      .option('-z, --no-gzip', 'Disables GZIP compression of the dump file')
      .action(async (file, uri, cmd) => this.restore(file, uri, cmd));

    this.program.parse(process.argv);
  }

  public static async dump(uri: string, cmd) {
    // Prepare a heroback dump instance
    try {
      const dump = await this.heroback.dump({
        uri,
        gzip: !cmd.gzip,
        baseDir: cmd.path || process.cwd(),
        exporter: cmd.exporter || 'file',
        provider: cmd.provider || 'postgres',
      });

      // Dump to local file
      await dump.export();

      this.heroback.logger.info('Success!');
      process.exit(0);
    } catch (exception) {
      this.heroback.logger.error(exception.message);
      process.exit(-1);
    }
  }

  public static async restore(file: string, uri: string, cmd) {
    // Prepare a heroback dump instance
    try {
      const restore = await this.heroback.restore({
        uri,
        gzip: !cmd.gzip,
        baseDir: cmd.path || process.cwd(),
        provider: cmd.provider || 'postgres',
      });

      // Restore from local dump
      const dump = await Stream.read({ fileName: file });
      await restore.import(dump);

      this.heroback.logger.info('Success!');
      process.exit(0);
    } catch (exception) {
      this.heroback.logger.error(exception.message);
      process.exit(-1);
    }
  }
}

HerobackBin.init();