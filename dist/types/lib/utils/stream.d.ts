/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { Stream } from 'stream';
export declare type InputStream = Stream;
export default class StreamUtils {
    static gzip(stream: InputStream): Promise<ChildProcess>;
    /**
     * Reads a stream into a string variable asynchronously.
     */
    static stringify(stream: InputStream): Promise<string>;
    /**
     * Writes a stream to a file.
     */
    static write(stream: InputStream, options: {
        fileName: string;
        baseDir: string;
    }): Promise<void>;
    /**
     * Reads a file into a stream.
     */
    static read(options: {
        fileName: string;
        baseDir?: string;
    }): Promise<InputStream>;
}
