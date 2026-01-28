import React from 'react';
import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';

const { Default } = composeStories(stories);

beforeAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
    value: function () {
      return {
        top: 1100, // 表示領域内にあるように見せる
        bottom: 1200,
        left: 0,
        right: 0,
        width: 0,
        height: 0,
      };
    },
  });
});

describe('ParallaxSticky Storybook Tests', () => {
  it('初期表示状態を確認', async () => {
    render(<Default />);
    expect(screen.getByText(/タイトル/)).toBeInTheDocument();
  });

  // TODO エラーになるのでコメントアウト
  // it('スクロールして要素が表示領域に入ると表示されること', async () => {
  //   render(<Default />);
  //
  //   // スクロール位置を1000pxに設定してボタンを表示
  //   act(() => {
  //     window.scrollTo(0, 1001);
  //   });
  //
  //   await waitFor(
  //     () => {
  //       const element = screen.getByText(/スクロールして表示されます/);
  //       expect(element.parentElement).toHaveClass('show');
  //     },
  //   );
  // });

  // TODO エラーになるのでコメントアウト
  // it('スクロールして要素が表示領域に入ると1秒遅れて表示されること', async () => {
  //   vi.useFakeTimers();
  //   render(<WithDelay />);
  //   await waitFor(() => {
  //     expect(screen.getByText(/1秒遅れて表示されます/)).not.toBeInTheDocument();
  //   });
  //
  //   await act(() => {
  //     vi.advanceTimersByTime(1100);
  //     return Promise.resolve();
  //   });
  //
  //   await waitFor(
  //     () => {
  //       expect(screen.getByText(/1秒遅れて表示されます/)).toBeInTheDocument();
  //     },
  //     { timeout: 10000 },
  //   );
  //
  //   vi.useRealTimers();
  // });
});
