import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
const { Default } = composeStories(stories);

describe('Price Storybook Tests', () => {
  it('「チャット回数制限あり」のテキストが含まれること', () => {
    render(<Default />);
    const text = screen.getByText(/チャット回数制限あり/i);
    expect(text).toBeInTheDocument();
  });

  it('「チャット無制限」のテキストが含まれること', () => {
    render(<Default />);
    const text = screen.getByText(/チャット無制限/);
    expect(text).toBeInTheDocument();
  });

  it('LINEアイコンが表示されること', () => {
    render(<Default />);
    const lineIcon = screen.getByAltText(/LINE icon/i);
    expect(lineIcon).toBeInTheDocument();
  });

  it('ボタンのテキストが表示されること', () => {
    render(<Default />);
    const buttonText = screen.getByText(/友達に追加して質問してみる/);
    expect(buttonText).toBeInTheDocument();
  });
});
