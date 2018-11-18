import { ChildProcess, spawn } from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';
import { Stream, Readable } from 'stream';

export type InputStream = Stream;

export default class StreamUtils {

  public static async gzip(stream: InputStream): Promise<ChildProcess> {
    // Spawn gzip child process and handle error codes
    const gzipChild = spawn('gzip', [], { stdio: ['pipe', 'pipe', 'inherit'] });
    stream.pipe(gzipChild.stdin);
    return gzipChild;
  }

  /**
   * Reads a stream into a string variable asynchronously.
   */
  public static async stringify(stream: InputStream): Promise<string> {
    const chunks = [];
    return new Promise<string>((resolve, reject) => {
      stream.on('data', chunk => chunks.push(chunk))
      stream.on('error', reject)
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    });
  }

  /**
   * Writes a stream to a file.
   */
  public static async write(stream: InputStream, options: { fileName: string, baseDir: string }): Promise<void> {
    const file = path.resolve(options.baseDir || './', options.fileName)
    const writeStream = fs.createWriteStream(file);
    stream.pipe(writeStream);
    return new Promise<void>((resolve, reject) => {
      writeStream.on('error', error => reject(error));
      writeStream.on('end', () => resolve());
    });
  }

  /**
   * Reads a file into a stream.
   */
  public static async read(options: { fileName: string, baseDir?: string }): Promise<InputStream> {
    const file = path.resolve(options.baseDir || './', options.fileName)
    return fs.createReadStream(file);
  }

}