import { describe, it, expect, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useRef } from 'react';
import { useInView } from './useInView';

describe('useInView', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('要素が交差した場合に true を返すこと', () => {
    let observerCallback: (entries: Array<{ isIntersecting: boolean }>) => void = () => {};
    const observe = vi.fn();
    const disconnect = vi.fn();
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(cb => {
        observerCallback = cb;
        return { observe, unobserve: vi.fn(), disconnect };
      }),
    );

    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement('div'));
      return useInView(ref);
    });

    expect(result.current).toBe(false);
    expect(observe).toHaveBeenCalled();

    act(() => {
      observerCallback([{ isIntersecting: true }]);
    });
    expect(result.current).toBe(true);
  });

  it('ref が未設定の場合は observer を生成しないこと', () => {
    const IntersectionObserverMock = vi.fn();
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

    const { result } = renderHook(() => {
      const ref = useRef<HTMLDivElement | null>(null);
      return useInView(ref);
    });

    expect(result.current).toBe(false);
    expect(IntersectionObserverMock).not.toHaveBeenCalled();
  });

  it('アンマウント時に observer を disconnect すること', () => {
    const disconnect = vi.fn();
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(() => ({ observe: vi.fn(), unobserve: vi.fn(), disconnect })),
    );

    const { unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement('div'));
      return useInView(ref);
    });

    unmount();
    expect(disconnect).toHaveBeenCalled();
  });
});
