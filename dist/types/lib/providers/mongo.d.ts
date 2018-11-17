/// <reference types="node" />
import { ChildProcess } from 'child_process';
import HerobackDump from "../dump";
import { HerobackProvider, DumpOptions } from '../base';
import { UriParamsSchema } from '../utils';
export default class MongoProvider extends HerobackProvider {
    ext: string;
    uriDefaults(): Partial<UriParamsSchema>;
    /**
     * Dumps the desired database using mongodump child process.
     */
    dump(options?: DumpOptions): Promise<ChildProcess>;
    restore(dump: HerobackDump): Promise<boolean>;
}
