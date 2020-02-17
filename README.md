# Demo JSON API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

![Docker Image CI](https://github.com/jwulf/camunda-cloud-demo-json-api/workflows/Docker%20Image%20CI/badge.svg)

This is a demo JSON API for [Camunda Cloud](https://camunda.io) [Getting Started](https://github.com/jwulf/camunda-cloud-starter) examples.

It's a NestJS application that exposes some endpoints that return JSON data for the Camunda HTTP Worker.

## Docker

A Docker image is available from [Docker Hub](https://hub.docker.com/r/sitapati/camunda-cloud-demo-json-api/tags).

You can run it using the included `docker-compose.yml` file:

```
docker-compose up
```

Then point your web browser to [http://localhost:8080/time](http://localhost:8080/time).