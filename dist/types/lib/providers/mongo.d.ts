/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { HerobackProvider } from '../base';
import { InputStream, UriParamsSchema } from '../utils';
export default class MongoProvider extends HerobackProvider {
    ext: string;
    uriDefaults(): Partial<UriParamsSchema>;
    /**
     * Dumps the desired database using mongodump child process.
     */
    dump(): Promise<ChildProcess>;
    restore(dump: InputStream): Promise<ChildProcess>;
}
