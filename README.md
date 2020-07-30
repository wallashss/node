# Node

Node.js application template with security enhancements, log rotation and localization.

Optionally, this application and all the different tests can be [build and run in Docker](https://github.com/filipecorrea/node/wiki/Build-and-Run-in-Docker).

## Prerequisites

- [Node.js](https://nodejs.org)

## Setup

Install project dependencies:

```console
npm install
```

## Run

Start the application:

```console
npm start
```

Access [http://localhost:3000/docs](http://localhost:3000/docs) to check the API documentation.

### Cluster Mode

To start the application in [cluster mode](https://nodejs.org/api/cluster.html#cluster_cluster), set `CLUSTER_MODE=true` in a `.env` file or run:

```console
CLUSTER_MODE=true npm start
```

## Test

Run code style, unit, integration and security tests:

```console
npm test
```

### Code Coverage

Generate code coverage test report:

```console
npm run cover
```

When reports are created, `coverage/lcov-report/index.html` can be opened in a web browser.

### Performance Tests

Run performance tests:

```console
npm run test:performance
```

When performance tests are completed, generate report:

```console
npm run performance:report
```

`logs/performance.log.html` should open in a web browser.
