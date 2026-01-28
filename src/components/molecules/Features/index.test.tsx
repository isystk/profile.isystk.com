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
          // ScrollIn や ParallaxSticky が表示状態になるよう即座に発火
          cb([{ isIntersecting: true }]);
          return null;
        },
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    // スクロール関連のモック
    vi.stubGlobal('scrollTo', vi.fn());
  });

  it('「タイトル」のテキストが含まれること', () => {
    render(<Default />);
    const text = screen.getByText(/シンプル操作で誰でも使える/);
    expect(text).toBeInTheDocument();
  });

  it('「本文」のテキストが含まれること', () => {
    render(<Default />);
    const text = screen.getByText(
      /トーク画面に話しかけるだけで、AIがすぐに返答。専門知識は一切不要。シニア層から学生まで幅広くご利用いただけます。/,
    );
    expect(text).toBeInTheDocument();
  });

  it('セクションタイトル「特徴」が表示されること', () => {
    render(<Default />);
    expect(screen.getByText('特徴')).toBeInTheDocument();
  });

  it('プライバシーに関するテキストが含まれること', () => {
    render(<Default />);
    expect(screen.getByText(/プライバシーにも配慮/)).toBeInTheDocument();
  });
});
