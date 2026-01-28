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
#echo "🔧 Running npm run build..."
npm run build || echo "Build failed: ignoring and continuing"

## Storybook バックグラウンドで実行
echo "📖 Starting Storybook..."
npm run storybook > /dev/null 2>&1 &

# Next.js をフォアグラウンドで起動
echo "🚀 Starting Next.js..."
npm run start
