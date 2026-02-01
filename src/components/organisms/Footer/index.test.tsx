import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Footer from './index';

describe('Footer', () => {
  it('コピーライトと言語、ロゴが表示されること', () => {
    render(<Footer />);

    expect(screen.getByText('© 2026')).toBeInTheDocument();
    expect(screen.getByText("isystk's Portfolio")).toBeInTheDocument();
  });

  it('全てのSNSリンクが正しいURLでレンダリングされていること', () => {
    render(<Footer />);

    const expectedLinks = [
      { label: 'Facebook', href: 'https://www.facebook.com/ise0615/' },
      { label: 'X(Twitter)', href: 'https://x.com/ise0615/' },
      { label: 'Instagram', href: 'https://www.instagram.com/isystk/' },
      { label: 'GitHub', href: 'https://github.com/isystk/' },
    ];

    expectedLinks.forEach(({ label, href }) => {
      const link = screen.getByLabelText(label);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });

  it('footerタグが正しいクラスを持っていること', () => {
    const { container } = render(<Footer />);
    const footerElement = container.querySelector('footer');
    expect(footerElement).toBeInTheDocument();
  });
});
