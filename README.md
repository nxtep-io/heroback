heroback
========

An agnostic database backup tool.


## Getting started

```bash
# Add to your dependencies using yarn
yarn global add "nxtep-io/heroback#master";

# Or, using NPM
npm install --global "github:nxtep-io/heroback#master";
```

Then, just call it from the command line.

```bash
# Minimal configuration takes only the database connection URL
heroback dump "<url>"
```
<br />

## Available providers

Heroback will try to understand the supplied connection URI to use one of the available providers in the library and dump its content to a file.

* **PostgreSQL**:

```bash
# Dumps to local file
heroback dump postgresql://localhost/test

# Restores from local file
heroback restore "20181118.052834.298000000.dump.sql" "postgresql://localhost/test";
```
<br />

* **MongoDB**:

```bash
# Dumps to local file
heroback dump mongo://localhost/test

# Restores from local file
heroback restore "20181118.052834.298000000.dump.archive" "mongo://localhost/test";
```
<br />

## Available importers / exporters

Heroback will try to understand the supplied connection URI to use one of the available providers in the library and dump its content to a file.

* **File** (Default): Streams the dump to/from a local file.

* **Amazon S3**: Streams the dump output to a S3 bucket in AWS. Checkout the [sample script](https://github.com/nxtep-io/heroback/blob/master/samples/pg_aws_dump.ts).

    This exporter requires the ```aws-sdk``` module and its environment variables.

    Remember to add it using NPM or Yarn: ```yarn global add aws-sdk```

* **Google GCS**: Streams the dump output to a Google Cloud Storage. Checkout the [sample script](https://github.com/nxtep-io/heroback/blob/master/samples/pg_gcp_dump.ts).

    This exporter requires the ```@google/storage``` module and its environment variables.

    Remember to add it using NPM or Yarn: ```yarn global add @google/storage```

<br />
Coming soon: MySQL, MariaDB and Elasticsearch.
<br />

## Programmatic Usage

You can use Heroback under the hood in your NodeJS / Typescript projects.

```typescript
import Heroback from 'heroback';

// Prepare a new heroback instance
const heroback = new Heroback({ gzip: true });

// Prepares to dump database to a local file
const dump = await heroback.dump({
  exporter: 'file',
  uri: 'postgres://locahost/test',
});

// Start the streaming to the local file
await dump.export();
console.log('Exported successfully!');
```
<br />

Check the [samples/](https://github.com/nxtep-io/heroback/tree/master/samples) directory in the repository.

<br />

## License

The project is licensed under the [MIT License](./LICENSE.md).
