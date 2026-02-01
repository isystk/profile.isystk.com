import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

const { Default } = composeStories(stories);

describe('MainVisual Storybook Tests', () => {
  beforeEach(() => {
    // window.scrollTo をモック化
    window.scrollTo = vi.fn();

    // アニメーション用の requestAnimationFrame と時間を制御
    vi.useFakeTimers();

    // IntersectionObserver のモック（ScrollIn用）
    const mockIntersectionObserver = vi.fn(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
    vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

    // 要素の座標取得用モック（scrollToNextで必要）
    document.getElementById = vi.fn().mockReturnValue({
      getBoundingClientRect: () => ({ top: 1000 }),
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('メインの見出しが表示されること', () => {
    render(<Default />);
    expect(screen.getByText('ITエンジニアを活きる')).toBeInTheDocument();
  });

  it('キャッチフレーズが表示されること', () => {
    render(<Default />);
    expect(screen.getByText('Yoshitaka Ise')).toBeInTheDocument();
  });

  it('スクロールボタンが表示されること', () => {
    render(<Default />);
    expect(screen.getByText('SCROLL')).toBeInTheDocument();
  });

  it('スクロールボタンをクリックしたときにwindow.scrollToが呼ばれること', async () => {
    render(<Default />);

    const scrollButton = screen.getByRole('link', { name: /SCROLL/i });

    // クリックイベントを発火
    fireEvent.click(scrollButton);

    // requestAnimationFrame を進める
    await act(async () => {
      // アニメーション時間（500ms）分進める
      vi.advanceTimersByTime(600);
    });

    // 呼ばれたことを検証
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
