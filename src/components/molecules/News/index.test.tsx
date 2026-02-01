import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('NewsSection Tests', () => {
  beforeEach(() => {
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
  });

  it('セクションタイトル「お知らせ」が表示されること', () => {
    render(<Default />);
    expect(screen.getByText('お知らせ')).toBeInTheDocument();
  });

  it('ニュース項目のタイトルと日付が正しく表示されること', () => {
    render(<Default />);
    expect(screen.getByText('ポートフォリオサイトを公開しました')).toBeInTheDocument();
    expect(screen.getByText('2026.02.01')).toBeInTheDocument();
  });

  it('ニュースの本文が表示されること', () => {
    render(<Default />);
    expect(screen.getByText(/Next.jsとTypeScriptを使用して作成した/)).toBeInTheDocument();
  });

  it('リンクが正しく設定されていること', () => {
    render(<Default />);
    const links = screen.getAllByRole('link');
    // タイトルリンクと画像リンクの2つが設定されているか確認
    expect(links[0]).toHaveAttribute('href', 'https://example.com/news/1');
    expect(links[0]).toHaveAttribute('target', '_blank');
    expect(links[0]).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('画像が表示されていること', () => {
    render(<Default />);
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('alt', 'ポートフォリオサイトを公開しました');
  });
});
