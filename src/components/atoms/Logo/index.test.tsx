import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';
import { Url } from '@/constants/url';

const { WithLink, WithoutLink } = composeStories(stories);

describe('Logo Storybook Tests', () => {
  it('リンク付きのロゴが表示されること', () => {
    render(<WithLink />);
    const textElement = screen.getByText('タイトル');

    expect(textElement).toBeInTheDocument();
    expect(textElement.closest('a')).toHaveAttribute('href', Url.TOP);
  });

  it('リンクなしのロゴが表示されること', () => {
    render(<WithoutLink />);
    const textElement = screen.getByText('タイトル');

    expect(textElement).toBeInTheDocument();
    expect(textElement.closest('a')).not.toBeInTheDocument();
  });
});
