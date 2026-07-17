import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('BasicLayout Storybook Tests', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );
    // jsdom は video の再生に未対応のため play() をモックする
    window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
  });

  it('子要素が表示されること', () => {
    render(<Default />);
    expect(screen.getByText('ページコンテンツ')).toBeInTheDocument();
  });

  it('ヘッダーとフッターが表示されること', () => {
    const { container } = render(<Default />);
    expect(container.querySelector('header')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('背景動画が設定されていること', () => {
    const { container } = render(<Default />);
    const video = container.querySelector('video');
    expect(video).toHaveAttribute('src', '/assets/movies/mv.webm');
  });
});
