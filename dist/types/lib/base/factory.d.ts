import { HerobackProvider } from "../base";
import HerobackExporter from "./exporter";
export declare const providerFactory: (options: {
    uri: string;
}, providers: any) => HerobackProvider;
export declare const exporterFactory: (name: string) => HerobackExporter;
