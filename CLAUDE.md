# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 概要

Next.js (App Router) + TypeScript で構築されたポートフォリオサイト。Storybook によるコンポーネント駆動開発、Vitest によるテスト、Three.js・Framer Motion によるビジュアル演出を採用。

## コマンド

開発は Docker コンテナ内で実行するため、各コマンドは `make` 経由で使用する。

```bash
make up          # Dockerコンテナ起動
make down        # コンテナ停止
make dev         # 開発サーバー起動 (http://localhost:3000)
make storybook   # Storybook起動 (http://localhost:6006)
make test        # 全テスト実行
make lint        # ESLint + TypeScriptチェック + Prettier整形
make format      # コード整形のみ
```

特定ファイルのテスト実行:
```bash
make test src/components/molecules/News/index.test.tsx
```

ステージング済みファイルのみチェック:
```bash
make format staged
make test staged
```

コンテナ外から直接実行する場合:
```bash
npm run dev
npm run test
npm run ts-check
npm run lint
```

## アーキテクチャ

### 状態管理

Context API + useReducer による独自グローバルステート。

- `src/states/root.ts` — `RootState` クラス（`isLoading`, `toastMessage`, `portfolio` を保持）
- `src/states/AppContext.tsx` — Context Provider と `useAppState` / `useAppDispatch` フックを定義
- `src/states/useAppRoot.ts` — `{ state, service }` を返すメインフック。コンポーネントはこれ経由でアクセスする
- `src/states/portfolio.ts` — ポートフォリオデータの型定義と `PortfolioState` クラス

### サービス層

- `src/services/main.ts` — `MainService` クラス。ローディング・トースト管理と各ドメインサービスのコンテナ
- `src/services/portfolio.ts` — `PortfolioService` クラス。`/public/api/portfolio.json` からデータ取得

状態変更のフロー: コンポーネント → `useAppRoot()` → `service.xxx.method()` → `MainService.setRootState()` → Context dispatch

### データフロー

アプリ起動時に `AppWrapper.tsx` が `service.portfolio.read()` を実行し、`/portfolio.json` からすべてのプロフィール・スキル・実績データを取得してグローバルステートに格納する。ポートフォリオデータの実体は `public/api/portfolio.json`。

### コンポーネント構成（Atomic Design）

```
src/components/
  atoms/        # 単一要素（Globe/Three.js, HamburgerButton, Loading など）
  molecules/    # セクション単位のコンポーネント（MainVisual, SkillSection, News など）
  organisms/    # ページ共通要素（Header, Footer, SideMenu, ErrorPage）
  interactions/ # アニメーション・UI補助（Circles/Three.js, ScrollIn, ParallaxSticky, Modal など）
  templates/    # ページレイアウト（BasicLayout）
```

### 環境変数

`NEXT_PUBLIC_ENDPOINT_URL` が API のベース URL となる。`public/api/` 以下に静的 JSON を配置し、それを fetch する構成。

## テスト

テストは Storybook の `composeStories` を使って Stories をそのままレンダリングして検証するパターンを採用している。

```tsx
const { Default } = composeStories(stories);
render(<Default />);
```

`IntersectionObserver` などブラウザ API は `vi.stubGlobal` でモックする。テスト設定は `vitest.config.ts`、セットアップファイルは `.storybook/vitest.setup.ts`。
