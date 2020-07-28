# Node

Node.js application template with security enhancements, log rotation and localization.

## Build and Run

### Prerequisites

- [Docker](https://www.docker.com)

### Build and Run

Build and run the project in Docker containers:

```console
docker-compose up -d
```

### Tests

Code style, unit, integration, security and performance tests will ran automatically in separate Docker containers.

#### Code coverage

When `node_api_test_cover` container finishes its execution, access generated code coverage report on `coverage` directory or open `coverage/lcov-report/index.html` on a web browser.

#### Performance

When `node_api_test_performance` container finishes its execution, access generated performance report on `performance.log` or run:

```console
npm run performance:report
```

`logs/performance.log.html` should open in a web browser.

### Shutdown and cleanup

Remove all containers and network:

```console
docker-compose down
```

## Develop

### Prerequisites

- [Node.js](https://nodejs.org)

### Setup

Install project dependencies:

```console
npm install
```

### Run

Start the application:

```console
npm start
```

#### Cluster Mode

To start the application in [cluster mode](https://nodejs.org/api/cluster.html#cluster_cluster), set `CLUSTER_MODE=true` in a `.env` file or run:

```console
CLUSTER_MODE=true npm start
```

#### API

Get server health:

```console
curl http://localhost:3000/health
```

### Test

Run code style, unit, integration and security tests:

```console
npm test
```

#### Code Coverage

Generate code coverage test report:

```console
npm run cover
```

#### Performance Tests

Run performance tests:

```console
npm run test:performance
```

When performance tests are completed, generate report:

```console
npm run performance:report
```

`logs/performance.log.html` should open in a web browser.
