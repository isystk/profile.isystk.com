import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';

const { Default } = composeStories(stories);

describe('ScrollTopButton Storybook Tests', () => {
  beforeEach(() => {
    // vi.stubGlobal を使用して型安全にプロパティをモック
    vi.stubGlobal('pageYOffset', 0);
    vi.stubGlobal('scrollY', 0);

    // scrollTop は document.documentElement のプロパティなので直接定義
    Object.defineProperty(document.documentElement, 'scrollTop', {
      value: 0,
      writable: true,
      configurable: true,
    });

    window.scrollTo = vi.fn();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it('スクロールすると表示状態になること', async () => {
    render(<Default />);

    await act(async () => {
      // stubGlobal で値を更新
      vi.stubGlobal('pageYOffset', 301);
      window.dispatchEvent(new Event('scroll'));
      await vi.advanceTimersByTimeAsync(100);
    });

    const button = screen.getByRole('link');
    const classListString = Array.from(button.classList).join(' ');
    expect(classListString).toContain('show');
  });

  it('ボタンをクリックした際にアニメーションによる scrollTo が複数回呼ばれること', async () => {
    render(<Default />);

    await act(async () => {
      vi.stubGlobal('pageYOffset', 301);
      vi.stubGlobal('scrollY', 301);
      window.dispatchEvent(new Event('scroll'));
      await vi.advanceTimersByTimeAsync(100);
    });

    const button = screen.getByRole('link');

    await act(async () => {
      fireEvent.click(button);
      // アニメーション完了（500ms）を待つ
      await vi.advanceTimersByTimeAsync(600);
    });

    expect(window.scrollTo).toHaveBeenCalled();
    // 最終的に 0 (ページトップ) に到達することを確認
    expect(window.scrollTo).toHaveBeenLastCalledWith(0, 0);
  });
});
