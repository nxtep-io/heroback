import { BaseError } from "ts-framework-common";
import HerobackProvider from "../provider";
import PostgresProvider from "./postgres";

export const providerFactory = (name: string): HerobackProvider =>  {
  if (name === 'postgres') {
    return new PostgresProvider();
  }
  throw new BaseError(`Unknown database provider: "${name}"`, { provider: name });
}