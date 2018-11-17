import { HerobackProvider } from "../base";
import HerobackExporter from "./exporter";
import { HerobackDumpOptions } from "../dump";
export declare const providerFactory: (options: HerobackDumpOptions) => HerobackProvider;
export declare const exporterFactory: (name: string) => HerobackExporter;
