/**
 * 日付文字列を「YYYY年M月」形式に変換する
 */
export const formatYearMonth = (dateString?: string): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);

  return `${year}年${month}月`;
};
