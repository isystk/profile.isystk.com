import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
const { Default } = composeStories(stories);

describe('StoreVisual Storybook Tests', () => {
  it('iPhone画像が表示されること', () => {
    render(<Default />);
    const image = screen.getByAltText(/Line App/i);
    expect(image).toBeInTheDocument();
  });

  it('「リリース1ヶ月で100万人登録！」のテキストが含まれること', () => {
    render(<Default />);
    const text = screen.getByText(/リリース1ヶ月で100万人登録！/);
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
