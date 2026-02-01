import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';

const { Default } = composeStories(stories);

describe('Footer', () => {
  it('コピーライトと言語、ロゴが表示されること', () => {
    render(<Default />);

    expect(screen.getByText(/© 2026/)).toBeInTheDocument();
    expect(screen.getByText("isystk's Portfolio")).toBeInTheDocument();
  });

  it('全てのSNSリンクが正しいURLでレンダリングされていること', () => {
    render(<Default />);

    const expectedLinks = [
      { label: 'Facebook', href: 'https://facebook.example.com/dummy' },
      { label: 'X(Twitter)', href: 'https://twitter.example.com/dummy' },
      { label: 'Instagram', href: 'https://instagram.example.com/dummy' },
      { label: 'GitHub', href: 'https://github.example.com/dummy' },
    ];

    expectedLinks.forEach(({ label, href }) => {
      const link = screen.getByLabelText(label);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });

  it('footerタグがレンダリングされていること', () => {
    const { container } = render(<Default />);
    const footerElement = container.querySelector('footer');
    expect(footerElement).toBeInTheDocument();
  });
});
