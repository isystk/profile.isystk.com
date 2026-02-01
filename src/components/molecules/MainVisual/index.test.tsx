import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('MainVisual Storybook Tests', () => {
  beforeEach(() => {
    vi.stubGlobal('scrollTo', vi.fn());
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
      return setTimeout(() => cb(performance.now()), 0);
    });
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
    const scrollButton = screen.getByRole('link', { name: /scroll/i });

    fireEvent.click(scrollButton);

    await waitFor(
      () => {
        expect(window.scrollTo).toHaveBeenCalled();
      },
      { timeout: 1000 },
    );
  });
});
