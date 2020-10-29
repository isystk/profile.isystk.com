# Nodeイメージの取得
FROM node:12.13.0-alpine

MAINTAINER isystk

# ワーキングディレクトリの作成
RUN mkdir -p /app
COPY nuxt.config.ts /app
COPY package.json /app
COPY tsconfig.json /app
ADD src /app/src/

WORKDIR /app

# アプリのインストール
RUN npm install -g yarn
RUN yarn install

# アプリのビルド
RUN yarn run build

EXPOSE 3000
CMD ["yarn", "start"]
