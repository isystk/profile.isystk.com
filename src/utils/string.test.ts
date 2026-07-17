import { describe, it, expect } from 'vitest';
import { nl2br } from './string';

describe('nl2br', () => {
  it('改行コードを <br /> タグに置換すること', () => {
    expect(nl2br('1行目\n2行目')).toBe('1行目<br />2行目');
  });

  it('複数の改行をすべて置換すること', () => {
    expect(nl2br('a\nb\nc')).toBe('a<br />b<br />c');
  });

  it('改行が含まれない場合はそのまま返すこと', () => {
    expect(nl2br('改行なし')).toBe('改行なし');
  });

  it('空文字の場合は空文字を返すこと', () => {
    expect(nl2br('')).toBe('');
  });
});
