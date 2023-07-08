FROM node:18-alpine

# RUN apk update && apk add bash

# SHELL ["/bin/bash", "-o", "pipefail", "-c"]

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install

CMD [ "/bin/sh" ]

EXPOSE 3000