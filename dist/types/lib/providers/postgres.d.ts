/// <reference types="node" />
import { ChildProcess } from 'child_process';
import HerobackDump from "../dump";
import HerobackProvider, { DumpOptions } from "./base";
export default class PostgresProvider extends HerobackProvider {
    /**
     * Dumps the desired database using pg_dump child process.
     */
    dump(options: DumpOptions): Promise<ChildProcess>;
    restore(dump: HerobackDump): Promise<boolean>;
}
