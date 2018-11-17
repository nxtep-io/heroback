export interface UriParamsSchema {
    host: string;
    port: string;
    database: string;
    username: string;
    password: string;
    protocol: string;
}
export default class UriUtils {
    static parse(input: string, defaults?: Partial<UriParamsSchema>): UriParamsSchema;
}
