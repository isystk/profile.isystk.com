import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('XTimeline Tests', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('指定したハンドルのタイムラインリンクが表示されること', () => {
    render(<Default />);
    const link = screen.getByRole('link', { name: 'Tweets by @ise0615' });
    expect(link).toHaveAttribute('href', 'https://twitter.com/ise0615?ref_src=twsrc%5Etfw');
  });

  it('widgets.js の読み込みスクリプトが挿入されること', () => {
    render(<Default />);
    const script = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]',
    );
    expect(script).not.toBeNull();
  });

  it('一定時間経過してもレンダリングされない場合はフォールバックリンクが表示されること', async () => {
    render(<Default fallbackTimeout={50} />);
    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: 'X (@ise0615) で最新投稿を見る' }),
      ).toBeInTheDocument();
    });
  });

  it('タイムライン描画イベントが発火すればフォールバックリンクは表示されないこと', async () => {
    let renderedCallback: (() => void) | undefined;
    vi.stubGlobal('twttr', {
      widgets: { load: vi.fn() },
      events: {
        bind: (_event: string, cb: () => void) => {
          renderedCallback = cb;
        },
      },
    });

    render(<Default fallbackTimeout={50} />);
    act(() => {
      renderedCallback?.();
    });

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });
    expect(
      screen.queryByRole('link', { name: 'X (@ise0615) で最新投稿を見る' }),
    ).not.toBeInTheDocument();
  });

  it('同一ハンドルを再マウントしても widgets.load はアクセス制限回避のため1回だけ呼ばれること', () => {
    const loadMock = vi.fn();
    vi.stubGlobal('twttr', {
      widgets: { load: loadMock },
      events: { bind: vi.fn() },
    });

    const { unmount } = render(<Default handle="unique-handle-for-load-once-test" />);
    unmount();
    render(<Default handle="unique-handle-for-load-once-test" />);

    expect(loadMock).toHaveBeenCalledTimes(1);
  });
});
