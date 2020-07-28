# Node

Node.js application template with security enhancements, log rotation and localization.

## Prerequisites

- [Node.js](https://nodejs.org)

## Setup

Install project dependencies:

```console
npm install
```

## Run

Start application:

```console
npm start
```

Start application in [cluster mode](https://nodejs.org/api/cluster.html#cluster_cluster) (optional):

```console
CLUSTER_MODE=true npm start
```

Get server health:

```console
curl --location --request GET 'http://localhost:3000/health'
```

## Test

## Code Style, Unit, Integration and Security Tests

Run code style, unit, integration and security tests:

```console
npm test
```

Generate code coverage test report (optional):

```console
npm run cover
```

## Performance Tests

Run performance tests:

```console
npm run test:performance
```

When performance tests are completed, generate report (optional):

```console
npm run performance:report
```

`logs/performance.log.html` should open in a web browser.
