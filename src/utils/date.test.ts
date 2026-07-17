import { describe, it, expect } from 'vitest';
import { formatYearMonth } from './date';

describe('formatYearMonth', () => {
  it('日付文字列を「YYYY年M月」形式に変換すること', () => {
    expect(formatYearMonth('2022-06-01')).toBe('2022年6月');
  });

  it('月が1桁の場合にゼロ埋めしないこと', () => {
    expect(formatYearMonth('2024-01-15')).toBe('2024年1月');
  });

  it('未指定の場合は空文字を返すこと', () => {
    expect(formatYearMonth(undefined)).toBe('');
  });

  it('空文字の場合は空文字を返すこと', () => {
    expect(formatYearMonth('')).toBe('');
  });

  it('不正な日付文字列の場合は元の文字列をそのまま返すこと', () => {
    expect(formatYearMonth('invalid-date')).toBe('invalid-date');
  });
});
