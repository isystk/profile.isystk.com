# Nodeイメージの取得
FROM node:12.13.0-alpine

MAINTAINER isystk

# install yarn
RUN npm install -g yarn

# Install app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN cd /app; yarn install

# Bundle app source
ADD ./src /app/src/

# Copy files
COPY nuxt.config.ts /app/nuxt.config.ts
COPY tsconfig.json /app/tsconfig.json

EXPOSE 3000

WORKDIR /app

CMD ["/bin/sh", "-c", "npm run build:production && npm run start"]