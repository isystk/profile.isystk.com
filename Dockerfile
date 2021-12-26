FROM node:14.18.2-alpine3.12

WORKDIR /app

RUN apk update && \
    apk upgrade && \
    apk add bash

COPY . /app/

RUN yarn install
RUN yarn build

EXPOSE 3000
CMD ["sh", "-c", "yarn start"]
