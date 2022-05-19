[![Community Extension](https://img.shields.io/badge/Community%20Extension-An%20open%20source%20community%20maintained%20project-FF4700)](https://github.com/camunda-community-hub/community)
[![](https://img.shields.io/badge/Lifecycle-Stable-brightgreen)](https://github.com/Camunda-Community-Hub/community/blob/main/extension-lifecycle.md#stable-)

# Demo JSON API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

![Docker Image CI](https://github.com/jwulf/camunda-cloud-demo-json-api/workflows/Docker%20Image%20CI/badge.svg)

This is a demo JSON API for [Camunda 8 SaaS](https://camunda.io) Getting Started examples.

It's a NestJS application that exposes some endpoints that return JSON data for the [Camunda 8 REST connector](https://docs.camunda.io/docs/components/modeler/web-modeler/connectors/available-connectors/rest/).

## Docker

A Docker image is available from [Docker Hub](https://hub.docker.com/r/sitapati/camunda-cloud-demo-json-api/tags).

You can run it using the included `docker-compose.yml` file:

```
docker-compose up
```

Then point your web browser to [http://localhost:3000/time](http://localhost:3000/time).
