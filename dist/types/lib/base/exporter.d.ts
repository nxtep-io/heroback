/// <reference types="node" />
import { ChildProcess } from "child_process";
import { ExportOptions } from "./options";
import { InputStream } from "../utils";
export default abstract class HerobackExporter {
    abstract export(dump: ChildProcess, options: ExportOptions): Promise<InputStream>;
}
