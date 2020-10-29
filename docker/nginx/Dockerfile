FROM alpine:3.6

MAINTAINER isystk

ENV PROXY_URL "http://host.docker.internal:3000"

# nginxのインストール
RUN apk update && \
    apk add --no-cache nginx

# ポート設定
EXPOSE 80 443

RUN mkdir -p /run/nginx

COPY conf.d/default.conf /etc/nginx/conf.d
COPY html/healthcheck.html /usr/share/nginx/html
ADD ssl /etc/nginx

# フォアグラウンドでnginx実行
CMD nginx -g "daemon off;"
