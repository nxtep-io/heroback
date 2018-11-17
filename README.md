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

## Available providers

Heroback will try to understand the supplied connection URI to use one of the available providers in the library and dump its content to a file.

* **PostgreSQL**:

```bash
heroback dump postgresql://localhost/test
```

* **PostgreSQL**:

```bash
heroback dump mongo://localhost/test
```


## License

The project is licensed under the [MIT License](./LICENSE.md).
