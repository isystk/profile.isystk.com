/**
 * 改行コード(\n)を <br /> タグに置換する
 */
export const nl2br = (text: string): string => {
  if (!text) return '';
  return text.replace(/\n/g, '<br />');
};
