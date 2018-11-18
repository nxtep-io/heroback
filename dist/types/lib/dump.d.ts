/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { ExportOptions, HerobackExporter, HerobackProvider } from './base';
export declare const CLEAN_REGEX: RegExp;
export declare const CLEAN_REGEX_SUBSTITUTION = "$1$2$3.$4$5$6.$7000000";
export interface HerobackDumpOptions {
    provider: string | HerobackProvider;
    exporter: string | HerobackExporter;
    baseDir?: string;
    gzip?: boolean;
    uri: string;
}
export default class HerobackDump {
    readonly options: HerobackDumpOptions;
    protected readonly timestamp: Date;
    protected readonly provider: HerobackProvider;
    protected readonly exporter: HerobackExporter;
    constructor(options: HerobackDumpOptions);
    /**
     * Initializes a provider instance based on constructor options.
     */
    private static initializeProvider;
    /**
     * Initializes an exporter instance based on constructor options.
     */
    private static initializeExporter;
    /**
     * Gets a generated filename for this dump instance.
     */
    readonly fileName: string;
    /**
     * Spawns a child process and dumps requested database. This methods returns the
     * child process instance itself without any heroback logics wrapped yet,
     * and is mostly used internally.
     * <br />
     * For a higher level interface, check ```dump.export()``` and ```dump.raw()```.
     */
    run(): Promise<ChildProcess>;
    /**
     * Dumps as a raw string. This is meant for development purposes,
     * may be bad for overall perfomance.
     */
    raw(): Promise<string>;
    /**
     * Dumps and exports the results.
     */
    export(options?: ExportOptions): Promise<boolean>;
}
