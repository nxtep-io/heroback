/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { DumpOptions, HerobackProvider, RestoreOptions } from '../base';
import { UriParamsSchema, InputStream } from '../utils';
export default class MongoProvider extends HerobackProvider {
    ext: string;
    uriDefaults(): Partial<UriParamsSchema>;
    /**
     * Dumps the desired database using mongodump child process.
     */
    dump(options?: DumpOptions): Promise<ChildProcess>;
    restore(dump: InputStream, options: RestoreOptions): Promise<boolean>;
}
