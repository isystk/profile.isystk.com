/**
 * @file 環境変数をグローバルにセットする
 */

import { Context } from "@nuxt/types";

export default (context: Context): void => {
  for (const k in context.app.$env) {
    console.log("env-inject:", k, context.app.$env[k]);
    if (!process.env[k]) {
      process.env[k] = context.app.$env[k];
    }
  }
};
