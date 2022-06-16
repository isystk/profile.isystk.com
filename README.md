🌙 isystk's ポートフォリオ
====

[![CircleCI](https://circleci.com/gh/isystk/profile.isystk.com/tree/master.svg?style=svg)](https://circleci.com/gh/isystk/profile.isystk.com/tree/master)
![GitHub issues](https://img.shields.io/github/issues/isystk/profile.isystk.com)
![GitHub forks](https://img.shields.io/github/forks/isystk/profile.isystk.com)
![GitHub stars](https://img.shields.io/github/stars/isystk/profile.isystk.com)
![GitHub license](https://img.shields.io/github/license/isystk/profile.isystk.com)

## Description

📗 Nuxt3 & Vuetify を利用してポートフォリオを作成しました。GithubにPushするとCircleCIにVercelにホスティングされるようにしています。Storybook も導入しています。

### ディレクトリ構造
```
.
├── Dockerfile
├── LICENSE
├── README.md
├── aws
│   ├── README.md
│   ├── cfn
│   ├── cloud9
│   └── network.png
├── demo.jpg
├── dist -> .output/public
├── node_modules
├── nuxt.config.ts
├── package.json
├── postcss.config.js
├── src
│   ├── __tests__
│   ├── app.vue
│   ├── assets
│   ├── components
│   ├── constants
│   ├── helper
│   ├── layouts
│   ├── locales
│   ├── middleware
│   ├── pages
│   ├── plugins
│   ├── public
│   ├── services
│   ├── store
│   ├── stories
│   └── utilities
├── tailwind.config.js
├── tsconfig.json
├── vitest.config.ts
└── yarn.lock

```

## 🖊️ VS. 

### 利用している技術
- Nuxt.js 3
- Vuetify 3
- TailwindCSS (Sass)
- Typescript 
- Chart.js
- Storybook

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

#### 本番環境(Vercel)へデプロイする場合
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
| [Nuxt3 Docs](https://v3.nuxtjs.org/guide/concepts/introduction)| Nuxt3 Docs |
| [Vuetify 3 Beta](https://next.vuetifyjs.com/en/getting-started/installation/)| Vuetify 3 Beta |
| [Material Design Icons](https://pictogrammers.github.io/@mdi/font/2.0.46/)| Material Design Icons |
| [Tailwind CSS](https://tailwindcss.com/docs/installation)| Tailwind CSS |
| [vee-validate](https://vee-validate.logaretm.com/v4/guide/components)| vee-validate |
| [husky v6 のインストール方法と使い方。lint-staged も導入して、品質を保とう](https://fwywd.com/tech/husky-setup)| husky v6 のインストール方法と使い方。lint-staged も導入して、品質を保とう |


## 🎫 Licence

[MIT](https://github.com/isystk/profile.isystk.com/blob/master/LICENSE)

## 👀 Author

[isystk](https://github.com/isystk)


