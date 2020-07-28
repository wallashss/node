# Node

Node.js application template with security enhancements, log rotation and localization.

## Prerequisites

- [Node.js](https://nodejs.org)

Optionally, this application and all the different tests can be [build and run in Docker](https://github.com/filipecorrea/node/wiki/Build-and-Run-in-Docker).

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

### Cluster Mode

To start the application in [cluster mode](https://nodejs.org/api/cluster.html#cluster_cluster), set `CLUSTER_MODE=true` in a `.env` file or run:

```console
CLUSTER_MODE=true npm start
```

### API

Get server health:

```console
curl http://localhost:3000/health
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
