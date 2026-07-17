import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('ThanksMessage Tests', () => {
  beforeEach(() => {
    // vitest v4 では new 演算子でアロー関数を呼び出せないため、function式で実装する
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(function (cb) {
        return {
          observe: () => {
            cb([{ isIntersecting: true }]);
            return null;
          },
          unobserve: vi.fn(),
          disconnect: vi.fn(),
        };
      }),
    );
  });

  it('メインの感謝メッセージが表示されること', () => {
    render(<Default />);
    expect(screen.getByText('Thanks for visiting!')).toBeInTheDocument();
  });

  it('サブメッセージのテキストが含まれること', () => {
    render(<Default />);
    expect(screen.getByText(/最後までご覧いただきありがとうございました。/)).toBeInTheDocument();
    expect(screen.getByText(/お気軽にお問い合わせください。/)).toBeInTheDocument();
  });

  it('適切なHTML構造（h2タグ）で描画されていること', () => {
    render(<Default />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Thanks for visiting!');
  });
});
