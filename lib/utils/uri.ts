import * as URI from 'urijs';

export interface UriParamsSchema {
  host: string,
  port: string,
  database: string,
  username: string,
  password: string,
};

export const UriDefaults: Partial<UriParamsSchema> = ({
  host: 'localhost',
  port: '5432',
});

export default class UriUtils {

  public static parse(input: string, defaults: Partial<UriParamsSchema> = {}): UriParamsSchema {
    if(!input || toString.call(input) !== toString.call('str')) {
      throw new Error(`Invalid database URL, expecting string but got ${toString.call(input)}`);
    }

    const uri = new URI(input);
    const defs = { ...UriDefaults, ...defaults };

    const results = {
      host: uri.host() || defs.host,
      port: uri.port() || defs.port,
      database: uri.path().replace('/', ''),
      username: uri.username(),
      password: uri.password(),
    };

    if(!results.host || !results.host.length) {
      throw new Error('Invalid database URL, host is not defined');
    }

    if(!results.port || !results.port.length) {
      throw new Error('Invalid database URL, port is not defined');
    }

    if(!results.database || !results.database.length) {
      throw new Error('Invalid database URL, database name is not defined');
    }

    return results;
  }
}
