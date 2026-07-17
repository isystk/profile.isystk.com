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

const { Default, HideTop } = composeStories(stories);

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

  it('isHideTop=false の場合、常に表示状態であること', () => {
    const { container } = render(<Default />);
    const header = container.querySelector('header');
    expect(header?.className).toContain('visible');
  });

  it('isHideTop=true の場合、初期状態では非表示であること', () => {
    const { container } = render(<HideTop />);
    const header = container.querySelector('header');
    expect(header?.className).not.toContain('visible');
  });

  it('isHideTop=true の場合、100px以上スクロールすると表示されること', () => {
    const { container } = render(<HideTop />);

    vi.stubGlobal('scrollY', 150);
    fireEvent.scroll(window);

    const header = container.querySelector('header');
    expect(header?.className).toContain('visible');
    vi.unstubAllGlobals();
  });

  it('isHideTop=true の場合、100px以下にスクロールが戻ると再度非表示になること', () => {
    const { container } = render(<HideTop />);

    vi.stubGlobal('scrollY', 150);
    fireEvent.scroll(window);
    expect(container.querySelector('header')?.className).toContain('visible');

    vi.stubGlobal('scrollY', 0);
    fireEvent.scroll(window);
    expect(container.querySelector('header')?.className).not.toContain('visible');
    vi.unstubAllGlobals();
  });
});
