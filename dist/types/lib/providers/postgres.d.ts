/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { DumpOptions, HerobackProvider } from '../base';
import HerobackDump from "../dump";
import { UriParamsSchema } from '../utils';
export default class PostgresProvider extends HerobackProvider {
    ext: string;
    uriDefaults(): Partial<UriParamsSchema>;
    /**
     * Dumps the desired database using pg_dump child process.
     */
    dump(options?: DumpOptions): Promise<ChildProcess>;
    restore(dump: HerobackDump): Promise<boolean>;
}
