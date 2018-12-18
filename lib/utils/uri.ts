import * as URI from 'urijs';

export interface UriParamsSchema {
  host: string,
  port: string,
  database: string,
  username: string,
  password: string,
  protocol: string,
  raw: string,
};

export default class UriUtils {

  public static parse(input: string, defaults: Partial<UriParamsSchema> = {}): UriParamsSchema {
    if(!input || toString.call(input) !== toString.call('str')) {
      throw new Error(`Invalid database URL, expecting string but got ${toString.call(input)}`);
    }

    const uri = new URI(input);
    const results = {
      raw: uri.toString(),
      host: uri.host() || defaults.host,
      port: uri.port() || defaults.port,
      protocol: uri.protocol() || defaults.protocol,
      username: uri.username() || defaults.username,
      password: uri.password() || defaults.password,
      database: uri.path().replace('/', ''),
    };

    return results;
  }
}
