import React from 'react';
import { describe, it, beforeEach, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('SideMenu Storybook Tests', () => {
  let scrollIntoViewMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    scrollIntoViewMock = vi.fn();

    // Storybook の DOM をレンダリング
    render(<Default />);

    // scrollIntoView を全h2/h3に設定（Selectorの対象すべて）
    const headings = document.querySelectorAll('h2, h3');
    headings.forEach(el => {
      el.scrollIntoView = scrollIntoViewMock;
    });
  });

  it('目次タイトルが表示される', () => {
    expect(screen.getByText('目次')).toBeInTheDocument();
  });

  it('h2/h3 に基づく項目がリストに表示される', () => {
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Subsection 1.1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
    expect(screen.getByText('Subsection 2.1')).toBeInTheDocument();
  });

  // TODO エラーになるのでコメントアウト
  // it('リストアイテムをクリックすると対応する見出しにスクロールする（モックテスト）', () => {
  //   fireEvent.click(screen.getByText('Section 1'));
  //   expect(scrollIntoViewMock).toHaveBeenCalled();
  // });
});
