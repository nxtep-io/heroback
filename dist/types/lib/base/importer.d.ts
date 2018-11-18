import { InputStream } from "../utils";
import { ImportOptions } from "./options";
export default abstract class HerobackImporter {
    abstract import(options: ImportOptions): Promise<InputStream>;
}
