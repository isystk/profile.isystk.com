import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
const { Default } = composeStories(stories);

describe('News Storybook Tests', () => {
  it('「日付」のテキストが含まれること', () => {
    render(<Default />);
    const text = screen.getByText(/2025.01.01/i);
    expect(text).toBeInTheDocument();
  });

  it('「タイトル」のテキストが含まれること', () => {
    render(<Default />);
    const text = screen.getByText(/タイトル1/);
    expect(text).toBeInTheDocument();
  });
});
