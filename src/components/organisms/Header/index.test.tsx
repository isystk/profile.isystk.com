import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('Header Storybook Tests', () => {
  it('お問い合わせボタンをクリックするとクリックイベントが発動すること', () => {
    render(<Default />);

    // 複数のメニュー（PC用とサイドメニュー用）があるため getAll を使用
    const contactLinks = screen.getAllByText('お問い合わせ');
    const contactLink = contactLinks[0];

    expect(contactLink).toBeInTheDocument();

    // href属性が正しいか確認するアサーションを追加（ベストプラクティス）
    expect(contactLink.closest('a')).toHaveAttribute('target', '_blank');

    fireEvent.click(contactLink);
  });
});
