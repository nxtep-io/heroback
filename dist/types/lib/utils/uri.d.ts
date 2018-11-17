export interface UriParamsSchema {
    host: string;
    port: string;
    database: string;
    username: string;
    password: string;
}
export declare const UriDefaults: Partial<UriParamsSchema>;
export default class UriUtils {
    static parse(input: string, defaults?: Partial<UriParamsSchema>): UriParamsSchema;
}
