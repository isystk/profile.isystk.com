/**
 * @formatter 文字列フォーマット関連のユーティリティ
 * import { formatter } from '@/utilities/'
 * const string = formatter.dateNenGatsuHi(number)
 */

import _ from "lodash";

export class Formatter {
  /**
   * 年月日を「yyyy年mm月dd日」形式に変換
   */
  public dateNenGatsuHi(date: string): string {
    // 年月日の値（ISO 8601を想定）をDateオブジェクトに変換
    const thisDate = new Date(date);
    // 変数展開で変換
    const formatted = `${thisDate.getFullYear()}年${thisDate.getMonth() +
      1}月${thisDate.getDate()}日`.replace(/\n|\r/g, "");
    return formatted;
  }

  /**
   * 年月日を「yyyy/mm/dd」形式に変換
   */
  public dateYYYYsMMsDD(date: string): string {
    // 年月日の値（ISO 8601を想定）をDateオブジェクトに変換
    const thisDate = new Date(date);
    const month = `${thisDate.getMonth() + 1}`.padStart(2, "0");
    const day = `${thisDate.getDate()}`.padStart(2, "0");
    // 変数展開で変換
    const formatted = `${thisDate.getFullYear()}/${month}/${day}`.replace(
      /\n|\r/g,
      ""
    );
    return formatted;
  }

  /**
   * 今日の年月日を「yyyy/mm/dd」形式で取得
   */
  public today(): string {
    // 今日の年月日の値（ISO 8601を想定）をDateオブジェクトで取得
    const thisDate = new Date();
    // 変数展開で変換
    const formatted = `${thisDate.getFullYear()}年${thisDate.getMonth() +
      1}月${thisDate.getDate()}日`.replace(/\n|\r/g, "");
    return formatted;
  }

  /**
   * 数値をカンマ区切りにする
   */
  public separateComma(num: number): string {
    return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }

  /**
   * \n 改行を <br> に変更
   * span(v-html="$sanitize({someContent})") で利用可能
   */
  public replaceLineFeedCodeToBR(s): string {
    if (!s) {
      return "";
    }

    return s.replace(/\r?\n/g, "<br>");
  }

  /**
   * 文字列を置換
   *
   * 全角スペースを半角スペースに
   * 先頭の半角を空文字に
   * 途中の半角スペースはそのまま
   * 特定の文字を大文字に置換
   * @param s 文字列
   */
  public replaceDisallow(s: string): string {
    return s
      .replace(/\u3000/g, " ")
      .replace(/^\s+|\s+$/gi, "")
      .replace(/\s+/gi, " ")
      .replace(/\//g, "／")
      .replace(/;/g, "；")
      .replace(/#/g, "＃")
      .replace(/&/g, "＆")
      .replace(/\\/g, "￥")
      .replace(/%/g, "％")
      .replace(/\+/g, "＋")
      .replace(/\?/g, "？");
  }
}

export const formatter = new Formatter();
