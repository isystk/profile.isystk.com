import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
const { Default } = composeStories(stories);

describe('Features Storybook Tests', () => {
  it('「タイトル」のテキストが含まれること', () => {
    render(<Default />);
    const text = screen.getByText(/シンプル操作で誰でも使える/);
    expect(text).toBeInTheDocument();
  });

  it('「本文」のテキストが含まれること', () => {
    render(<Default />);
    const text = screen.getByText(
      /トーク画面に話しかけるだけで、AIがすぐに返答。専門知識は一切不要。シニア層から学生まで幅広くご利用いただけます。/,
    );
    expect(text).toBeInTheDocument();
  });
});
