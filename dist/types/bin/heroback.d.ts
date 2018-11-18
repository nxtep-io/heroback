#!/usr/bin/env node
import * as program from 'commander';
import Heroback from '../lib';
export default class HerobackBin {
    protected static readonly heroback: Heroback;
    protected static readonly program: program.Command;
    static init(): void;
    static dump(uri: string, cmd: any): Promise<void>;
    static restore(file: string, uri: string, cmd: any): Promise<void>;
}
