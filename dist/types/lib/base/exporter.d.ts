/// <reference types="node" />
import { ChildProcess } from "child_process";
import { ExportOptions } from "./options";
export default abstract class HerobackExporter {
    abstract export(dump: ChildProcess, options: ExportOptions): Promise<boolean>;
}
