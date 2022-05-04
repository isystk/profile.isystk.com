🌙 isystk's ポートフォリオ
====

[![CircleCI](https://circleci.com/gh/isystk/profile.isystk.com/tree/master.svg?style=svg)](https://circleci.com/gh/isystk/profile.isystk.com/tree/master)
![GitHub issues](https://img.shields.io/github/issues/isystk/profile.isystk.com)
![GitHub forks](https://img.shields.io/github/forks/isystk/profile.isystk.com)
![GitHub stars](https://img.shields.io/github/stars/isystk/profile.isystk.com)
![GitHub license](https://img.shields.io/github/license/isystk/profile.isystk.com)

## Description

📗 isystk のポートフォリオです。Typescript&Nuxt.jsで最近のフロントエンドの技術を取り入れて作成しました。

### ディレクトリ構造
```
.
├── src (Nuxt関連のソースファイル)
│    ├── @types
│    ├── assets
│    ├── common
│    ├── components
│    ├── interfaces
│    ├── middleware
│    ├── pages
│    ├── plugins
│    ├── static
│    ├── store
│    ├── test
│    └── utilities
├── .babelrc (Babel設定ファイル)
├── .vscode (VSCode設定ファイル)
├── jest.config.js
├── nuxt.config.ts
├── package.json
└── tsconfig.json
```

## 🖊️ VS. 

### 利用している技術
- Nuxtjs 2.10
- Typescript 

## 🌐 Demo

![DEMO](./demo.jpg "DEMO")

https://profile.isystk.com/

## 🎨 Requirement

推奨するNodeのバージョン v16.13.1 

## 📦 Install

```bash
$ nodebrew install v16.13.1 
$ node install -g yarn
$ yarn
```

## 💬 Usage

```bash
$ yarn dev
```

本番環境(Vercel)へデプロイする場合<br>
静的ファイルを生成した後、GithubにPushすることでCircleCI経由でVercelにデプロイされます。
```bash
$ yarn generate
$ git push
```

## 🔧 Contribution

1. Fork it ( http://github.com/isystk/profile.isystk.com/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

## 🔗 参考


| プロジェクト| 概要|
| :---------------------------------------| :-------------------------------|
| [公式ドキュメント - Nuxt.js](https://ja.nuxtjs.org/guide/)| 公式ドキュメント - Nuxt.js|
| [公式ドキュメント - TypeScript](https://www.typescriptlang.org/docs/home)| 公式ドキュメント - TypeScript|
| [仕事ですぐに使えるTypeScript](https://future-architect.github.io/typescript-guide/)| 仕事ですぐに使えるTypeScript|
| [アイコン（fontawesome）](https://fontawesome.com/icons?d=gallery)| アイコン（fontawesome）|
| [SASS](https://sass-lang.com/documentation) | SASS |

## 🎫 Licence

[MIT](https://github.com/isystk/profile.isystk.com/blob/master/LICENSE)

## 👀 Author

[isystk](https://github.com/isystk)


