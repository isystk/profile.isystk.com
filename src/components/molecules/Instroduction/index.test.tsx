import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

// 1. useAppRootをモック
vi.mock('@/states/useAppRoot', () => ({
  default: () => ({
    state: {
      portfolio: {
        profile: {
          message:
            'はじめまして。伊勢と申します。現在は、フルリモートでシステムエンジニアに従事しております。',
          updated_at: '2022-06-01',
        },
      },
    },
  }),
}));

const { Default } = composeStories(stories);

describe('Introduction Storybook Tests', () => {
  beforeEach(() => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    });
    vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);
  });

  it('セクションタイトル「自己紹介」が表示されること', () => {
    render(<Default />);
    expect(screen.getByText('自己紹介')).toBeInTheDocument();
  });

  it('自己紹介の本文が含まれていること', () => {
    render(<Default />);
    expect(screen.getByText(/伊勢と申します/)).toBeInTheDocument();
    expect(screen.getByText(/フルリモートでシステムエンジニアに従事/)).toBeInTheDocument();
  });

  it('更新日が表示されていること', () => {
    render(<Default />);
    // formatYearMonthを通すと "2022年06月" になるため、正規表現で柔軟にマッチさせる
    expect(screen.getByText(/2022年0?6月更新/)).toBeInTheDocument();
  });

  it('プロフィール画像が表示されること', () => {
    render(<Default />);
    const image = screen.getByAltText('Profile');
    expect(image).toBeInTheDocument();
  });
});
