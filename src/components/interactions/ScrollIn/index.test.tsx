import React, { act } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default, WithDelay } = composeStories(stories);

describe('ScrollIn Storybook Tests', () => {
  let observerCallback: (entries: Partial<IntersectionObserverEntry>[]) => void;

  beforeEach(() => {
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(cb => {
        observerCallback = cb;
        return {
          observe: vi.fn(),
          unobserve: vi.fn(),
          disconnect: vi.fn(),
        };
      }),
    );
  });

  it('初期表示ではアニメーションクラスが付与されていないこと', () => {
    render(<Default />);
    const target = screen.getByText('スクロールして表示されます').parentElement!;
    expect(target.className).not.toContain('animated');
  });

  it('画面内に入ったときにアニメーションクラスが付与されること', async () => {
    render(<Default />);
    const target = screen.getByText('スクロールして表示されます').parentElement!;

    await act(async () => {
      // isIntersecting だけを持つオブジェクトの配列として渡します
      observerCallback([{ isIntersecting: true }]);
    });

    expect(target.className).toContain('animated');
  });

  it('delay プロパティが style に反映されること', async () => {
    render(<WithDelay />);
    const target = screen.getByText('1秒遅れて表示されます').parentElement!;

    await act(async () => {
      observerCallback([{ isIntersecting: true, target }]);
    });

    expect(target).toHaveStyle({ animationDelay: '1s' });
  });

  it('画面外に出たときにアニメーションクラスが外れること', async () => {
    render(<Default />);
    const target = screen.getByText('スクロールして表示されます').parentElement!;

    // 画面内へ
    await act(async () => {
      observerCallback([{ isIntersecting: true, target }]);
    });
    expect(target.className).toContain('animated');

    // 画面外へ
    await act(async () => {
      observerCallback([{ isIntersecting: false, target }]);
    });
    expect(target.className).not.toContain('animated');
  });
});
