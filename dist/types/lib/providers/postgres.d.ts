/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { DumpOptions, HerobackProvider, RestoreOptions } from '../base';
import * as Utils from '../utils';
export default class PostgresProvider extends HerobackProvider {
    ext: string;
    uriDefaults(): Partial<Utils.UriParamsSchema>;
    /**
     * Dumps the desired database using pg_dump child process.
     */
    dump(options?: DumpOptions): Promise<ChildProcess>;
    /**
     * Restores the dump to the desired database using apsql child process.
     */
    restore(dump: Utils.InputStream, options: RestoreOptions): Promise<ChildProcess>;
}
