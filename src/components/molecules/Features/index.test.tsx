import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('Features Storybook Tests', () => {
  beforeEach(() => {
    // IntersectionObserver のモック設定
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(cb => ({
        observe: () => {
          cb([{ isIntersecting: true }]);
          return null;
        },
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    // ResizeObserver のモック設定 (ScrollIn等で使用)
    vi.stubGlobal(
      'ResizeObserver',
      vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    vi.stubGlobal('scrollTo', vi.fn());
  });

  it('セクションタイトル「OUTPUT」が表示されること', () => {
    render(<Default />);
    expect(screen.getByText('OUTPUT')).toBeInTheDocument();
  });

  it('ポートフォリオデータのタイトルが含まれること', () => {
    render(<Default />);
    expect(screen.getByText('JSの学び舎')).toBeInTheDocument();
  });

  it('ポートフォリオデータの本文が含まれること', () => {
    render(<Default />);
    expect(screen.getByText(/Javascriptに関する知識を発信しています。/)).toBeInTheDocument();
  });

  it('リンクが正しく設定されていること', () => {
    render(<Default />);
    const link = screen.getByRole('link', { name: /VIEW MORE/i });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
