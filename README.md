🌙 nextjs-boilerplate
====

![CI](https://github.com/isystk/nextjs-boilerplate/actions/workflows/unitTest.yml/badge.svg)
![GitHub issues](https://img.shields.io/github/issues/isystk/nextjs-boilerplate)
![GitHub forks](https://img.shields.io/github/forks/isystk/nextjs-boilerplate)
![GitHub stars](https://img.shields.io/github/stars/isystk/nextjs-boilerplate)
![GitHub license](https://img.shields.io/github/license/isystk/nextjs-boilerplate)

## 📗 プロジェクトの概要

Next.js、Storybook、Vitest のボイラープレートです。

#### 使用しているライブラリ

- Next.js 15
- Storybook 8.6
- Typescript 5
- Tailwindcss 4
- Vitest 3

## 🌐 Demo

![フロント画面](./documents/front.png "フロント画面")

## 📦 ディレクトリ構造

```
.
├── .env
├── .env.example
├── .prettierrc
├── .storybook
│   ├── main.ts
│   ├── preview.tsx
│   └── vitest.setup.ts
├── README.md
├── documents
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── node_modules
├── public
│   └── images
├── src
│   ├── @types
│   ├── app
│   ├── assets
│   ├── components
│   ├── constants
│   ├── services
│   └── states
├── tsconfig.json
└── vitest.config.ts
```


### 動作を確認する
```

# アプリを起動する
> npm run dev

# Storybookを起動する
> npm run storybook

# テストコードを実行する
> npm run test

```

### storybook
Reactで作成されたコンポーネントの確認が可能です。

http://localhost:6006/

![storybook](./documents/storybook.png "storybook")

## 📖 ドキュメント

| 種類       | リンク                                                                           |
|:-----------|:------------------------------------------------------------------------------|
| コーディング規約   | [React コーディング規約](./documents/react_cording_rule.md)                           |
| 公式サイト    | [Next.js 15公式ドキュメント](https://nextjs.org/docs)                                 |
| 公式サイト    | [Tailwind CSS ドキュメント](https://v3.tailwindcss.com/docs/)                       |
| 参考サイト    | [React Hooks 全19種の解説とサンプル](https://isystk.github.io/react19-hook-study/study) |


## 🎫 Licence

[MIT](https://github.com/isystk/nextjs-boilerplate/blob/master/LICENSE)

## 👀 Author

[isystk](https://github.com/isystk)
