import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('XProfileCard Tests', () => {
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

  it('名前とXハンドルが表示されること', () => {
    render(<Default />);
    expect(screen.getByText('伊勢 功崇')).toBeInTheDocument();
    expect(screen.getByText('@ise0615')).toBeInTheDocument();
  });

  it('フォロワー数がカウントアップして表示されること', async () => {
    render(<Default />);
    await waitFor(
      () => {
        expect(screen.getByText('7,626')).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });

  it('プロフィールリンクがXのURLになっていること', () => {
    render(<Default />);
    const link = screen.getByRole('link', { name: /伊勢 功崇/ });
    expect(link).toHaveAttribute('href', 'https://twitter.com/ise0615/');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('Xタイムラインが表示されること', () => {
    render(<Default />);
    expect(screen.getByRole('link', { name: 'Tweets by @ise0615' })).toBeInTheDocument();
  });
});
