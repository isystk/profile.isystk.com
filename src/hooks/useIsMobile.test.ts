import { describe, it, expect, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useIsMobile } from './useIsMobile';

describe('useIsMobile', () => {
  const originalInnerWidth = window.innerWidth;

  afterEach(() => {
    window.innerWidth = originalInnerWidth;
  });

  it('画面幅がブレイクポイント以上の場合は false を返すこと', () => {
    window.innerWidth = 1024;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('画面幅がブレイクポイント未満の場合は true を返すこと', () => {
    window.innerWidth = 375;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('リサイズ時に判定が更新されること', () => {
    window.innerWidth = 1024;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      window.innerWidth = 375;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(true);
  });

  it('カスタムの breakpoint を指定できること', () => {
    window.innerWidth = 800;
    const { result } = renderHook(() => useIsMobile(900));
    expect(result.current).toBe(true);
  });
});
