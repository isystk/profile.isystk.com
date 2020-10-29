import { Configuration as NuxtConfiguration } from "@nuxt/types";
import webpack, {
  Configuration as WebpackConfiguration,
  Options as WebpackOptions,
  Plugin as WebpackPlugin
} from "webpack";

require("dotenv").config();

const pkg = require("./package");

const PUBLIC_PATH = "/";

const nuxtConfig: NuxtConfiguration = {
  mode: "universal",
  srcDir: "src/",

  /**
   * 環境変数
   * ビルド時に渡される env の値は、ここに記載することで文字列に置換される
   */
  env: {},

  router: {
    // リロードのタイミングでは SSR 側で実行される
    // ルーティングの度に CSR 側で実行される
    // ログインの必要のない画面でも middleware が実行されるので注意が必要
    // middleware: 'check-auth',

    base: PUBLIC_PATH,

    middleware: "i18n"
  },

  // https://ja.nuxtjs.org/faq/host-port/
  server: {
    port: 3000,
    // 他のパソコンから IP でつながるように host を変更
    host: "0.0.0.0" // デフォルト: localhost
  },
  head: {
    titleTemplate: pkg.description,
    meta: [
      { hid: "charset", charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      },
      { hid: "noydir", name: "robots", content: "noydir" },
      { hid: "noodp", name: "robots", content: "noodp" },
      { hid: "index,follow", name: "robots", content: "index,follow" },
      {
        hid: "format-detection",
        name: "format-detection",
        content: "telephone=no"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: PUBLIC_PATH + "favicon.ico" }
    ]
  },
  // loading: { color: "#fff" },
  // ローディングを使わない場合はここを false
  loading: false,
  /**
   * Global CSS
   * 他の scss ファイルに依存しない scss はこちらに
   */
  css: ["@/assets/sass/app.scss"],
  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/axios",
    "nuxt-polyfill",
    "@nuxtjs/pwa",
    ["@nuxtjs/moment", ["ja"]],
    "nuxt-fontawesome",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-11964840-8"
      }
    ]
  ],
  plugins: [
    "@/plugins/libraries/sanitize-html.ts",
    "@/plugins/libraries/lodash.ts",
    "@/plugins/libraries/moment.ts",
    "@/plugins/libraries/axios.ts",
    "@/plugins/constants-inject.ts",
    "@/plugins/env-inject.ts",
    "@/plugins/locale/i18n.ts"
  ],
  /**
   * Build configuration
   * webpack のビルドに関する設定はここに書く
   */
  build: {
    // vue-devtools を許可するかどうかを設定します
    // https://ja.nuxtjs.org/api/configuration-build/#devtools
    devtools: true,

    plugins: [],

    /**
     * You can extend webpack config here
     */
    extend(
      config: WebpackConfiguration,
      ctx: {
        isDev: boolean;
        isClient: boolean;
        isServer: boolean;
        loaders: any;
      }
    ): void {
      // ホットリロード時にESLintを実行させる
      if (ctx.isDev && process.client) {
        if (config.module) {
          config.module.rules.push({
            enforce: "pre",
            test: /\.(js|ts|vue)$/,
            loader: "eslint-loader",
            exclude: /(node_modules)/
          });
        }
      }
    },
    // extractCSS: isProduction,

    terser: {
      terserOptions: {
        compress: {
          // nuxt buildでproductionビルドするときにconsole.logを削除する
          // https://www.lancard.com/blog/2019/04/05/delete_console-log_at_nuxt_build/
          drop_console: process.env.envName === "production" // eslint-disable-line @typescript-eslint/camelcase
        }
      }
    }
  },
  buildcd: {},
  buildModules: ["@nuxt/typescript-build"],
  /**
   * Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  // 外部ドメインのAPIを利用するためのCORS対応
  // See https://blog.ikedaosushi.com/entry/2019/02/09/013404
  proxy: {},
  // See https://qiita.com/OvThAlmin/items/154e53952bc46d91d44c
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"]
      }
    ]
  },

  // polyfill対応
  // See https://github.com/Timkor/nuxt-polyfill
  polyfill: {
    features: [
      {
        require: "smoothscroll-polyfill",
        detect: () =>
          "scrollBehavior" in document.documentElement.style &&
          window.__forceSmoothScrollPolyfill__ !== true,
        install: smoothscroll => smoothscroll.polyfill()
      }
    ]
  }
};

export default nuxtConfig;
