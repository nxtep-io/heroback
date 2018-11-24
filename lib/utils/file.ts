import * as path from 'path';
import * as fs from 'fs-extra';

export default class FileUtils {
  public static async delete(options: { fileName: string, baseDir?: string }): Promise<void> {
    return fs.unlink(path.join( options.baseDir || process.cwd(), options.fileName));
  }
}