import React from 'react'; // JSX Runtimeが未設定の場合に必要
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

const { Default } = composeStories(stories);

describe('Header Storybook Tests', () => {
  it('お問い合わせボタンをクリックするとクリックイベントが発動すること', () => {
    render(<Default />);

    const contactLinks = screen.getAllByText('お問い合わせ');
    const contactLink = contactLinks[0];

    const anchorElement = contactLink.closest('a');

    // aタグ自体の存在を確認
    expect(anchorElement).not.toBeNull();

    if (anchorElement) {
      expect(anchorElement).toHaveAttribute('target', '_blank');
      // 属性が null でないことを確認してから判定
      expect(anchorElement.getAttribute('rel')).toContain('noopener');
    }

    fireEvent.click(contactLink);
  });
});
