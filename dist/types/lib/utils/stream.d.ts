/// <reference types="node" />
import { ChildProcess } from 'child_process';
export declare type InputStream = {
    on: Function;
    pipe: Function;
};
export default class StreamUtils {
    static gzip(stream: InputStream): Promise<ChildProcess>;
    /**
     * Reads a stream into a string variable asynchronously.
     */
    static stringify(stream: InputStream): Promise<string>;
    /**
     * Reads a stream into a string variable asynchronously.
     */
    static write(stream: InputStream, options: {
        fileName: string;
        baseDir: string;
    }): Promise<void>;
}
