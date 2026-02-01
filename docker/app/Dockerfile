FROM node:20-bullseye

# 作業ディレクトリを設定
WORKDIR /app

# 必要なツールのインストール
RUN apt-get update && \
    apt-get install -y curl git vim && \
    rm -rf /var/lib/apt/lists/*

# playwright 関連のセットアップ（インストールと依存関係）
RUN npm install -g playwright && \
    playwright install --with-deps

## エントリポイント
COPY entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# ポートを公開
EXPOSE 3000 6006
