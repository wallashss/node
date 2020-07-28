# Node

Node.js application template with security enhancements, log rotation and localization.

## Prerequisites

- [Docker](https://www.docker.com)

## Build and Run

Build and run the project in Docker containers:

```console
docker-compose up -d
```

## Tests

Code style, unit, integration, security and performance tests will run automatically in separate Docker containers.

### Code coverage

When `node_api_test_cover` container finishes its execution, access generated code coverage report on `coverage` directory or open `coverage/lcov-report/index.html` in a web browser.

### Performance

When `node_api_test_performance` container finishes its execution, access generated performance report on `logs/performance.log` or run:

```console
npm run performance:report
```

`logs/performance.log.html` should open in a web browser.

## Shutdown and cleanup

Remove all containers and network:

```console
docker-compose down
```
