/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { HerobackProvider } from '../base';
import * as Utils from '../utils';
export default class MySQLProvider extends HerobackProvider {
    ext: string;
    uriDefaults(): Partial<Utils.UriParamsSchema>;
    /**
     * Dumps the desired database using mysqldump child process.
     */
    dump(): Promise<ChildProcess>;
    /**
     * Restores the dump to the desired database using apsql child process.
     */
    restore(dump: Utils.InputStream): Promise<ChildProcess>;
}
