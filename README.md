# Docker Node Hello World

This app showcases a dockerized example of a node app that sits behind an nginx reverse-proxy that supports multiple domains.

## Getting started

1. `docker build -f Dockerfile-dev -t docker-node-hello .`
2. `docker-compose up` 
3. Verify it is running properly: `curl -H "Host: localhost-1.com" localhost`
