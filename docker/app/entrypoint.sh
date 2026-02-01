#!/bin/bash
set -e  # エラーが発生した時点で終了

cd /app

# .env がなければコピー
echo "📦 Checking .env file..."
if [ ! -f .env ]; then
  echo "📄 .env not found, copying from .env.example"
  cp .env.example .env
else
  echo "✅ .env already exists"
fi

# Next.js セットアップ
echo "🔧 Running npm install..."
npm install

# コンテナを永続化
echo "🚀 Container is ready. Keeping it alive..."
tail -f /dev/null
