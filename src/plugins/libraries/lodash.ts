/**
 * @file lodash をグローバルにセットする
 */
// https://ja.nuxtjs.org/guide/plugins

import * as _ from "lodash";

export default (context, inject: any): void => {
  inject("_", _);
};
