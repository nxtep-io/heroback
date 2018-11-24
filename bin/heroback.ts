#!/usr/bin/env node

import * as program from 'commander';
import * as Package from 'pjson';
import Heroback, { Stream } from '../lib';
import { BaseError } from 'ts-framework-common';

export default class HerobackBin {
  protected static readonly heroback = new Heroback();
  protected static readonly program: program.Command = program.version(Package.version);

  public static init() {
    // Prepare dump command
    this.program
      .command('dump <uri>')
      .option('-e, --exporter [exporter]', 'The exporter to be used, defaults to "file"')
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
        baseDir: cmd.path || process.cwd(),
        exporter: cmd.exporter || 'file',
      });

      // Dump to local file
      await dump.export();

      this.heroback.logger.info('Success!');
      process.exit(0);
    } catch (exception) {
      this.heroback.logger.error(exception.message);
      process.exit(exception.details.code);
    }
  }

  public static async restore(file: string, uri: string, cmd) {
    // Prepare a heroback dump instance
    try {
      const restore = await this.heroback.restore({
        uri,
        gzip: !cmd.gzip,
        baseDir: cmd.path || process.cwd(),
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