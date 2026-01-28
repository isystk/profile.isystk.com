import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('Introduction Storybook Tests', () => {
  beforeEach(() => {
    // IntersectionObserverのモック
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    });
    vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);
  });

  it('セクションタイトル「INTRODUCTION」が表示されること', () => {
    render(<Default />);
    expect(screen.getByText('INTRODUCTION')).toBeInTheDocument();
  });

  it('自己紹介の本文が含まれていること', () => {
    render(<Default />);
    expect(screen.getByText(/伊勢と申します/)).toBeInTheDocument();
    expect(screen.getByText(/フルリモートでシステムエンジニアに従事/)).toBeInTheDocument();
  });

  it('更新日が表示されていること', () => {
    render(<Default />);
    expect(screen.getByText(/\(2022年6月更新\)/)).toBeInTheDocument();
  });

  it('プロフィール画像が表示されること', () => {
    render(<Default />);
    const image = screen.getByAltText('Profile');
    expect(image).toBeInTheDocument();
  });
});
