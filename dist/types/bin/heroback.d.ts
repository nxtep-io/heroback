#!/usr/bin/env node
import * as program from 'commander';
export default class HerobackBin {
    protected static readonly program: program.Command;
    static init(): void;
    static dump(uri: any, cmd: any): Promise<void>;
}
