import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('SkillSection', () => {
  beforeAll(() => {
    // IntersectionObserver のスタブ化
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn((cb: (entries: Array<{ isIntersecting: boolean }>) => void) => ({
        observe: () => cb([{ isIntersecting: true }]),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    // ScrollIn 等で使用される ResizeObserver のスタブ化
    vi.stubGlobal(
      'ResizeObserver',
      vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  it('タイトルが表示されること', () => {
    render(<Default />);
    expect(screen.getByText('SKILLS')).toBeInTheDocument();
  });

  it('各スキルカテゴリのタイトルと説明文が表示されること', () => {
    render(<Default />);
    expect(screen.getByText('フロントエンド')).toBeInTheDocument();
    expect(screen.getByText('フロントエンドの開発経験についての説明文です。')).toBeInTheDocument();
    expect(screen.getByText('PHP')).toBeInTheDocument();
  });

  it('各スキル項目の詳細が表示されること', () => {
    render(<Default />);
    expect(screen.getByText('React.js・Next.js')).toBeInTheDocument();

    // getByText ではなく getAllByText を使用
    const ratings = screen.getAllByText('Lv.4');
    expect(ratings.length).toBeGreaterThan(0);

    expect(screen.getByText('Laravel')).toBeInTheDocument();
  });
});
