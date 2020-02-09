FROM alpine:3.6

MAINTAINER isystk

# nginxのインストール
RUN apk update && \
    apk add --no-cache nginx

# ポート設定
EXPOSE 80 443

RUN mkdir -p /run/nginx

# フォアグラウンドでnginx実行
CMD nginx -g "daemon off;"
