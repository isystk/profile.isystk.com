import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

// stylesをインポートして実際のクラス名を取得できるようにする
import styles from './styles.module.scss';

const { Default } = composeStories(stories);

describe('SideMenu Storybook Tests', () => {
  it('ハンバーガーボタンが表示されていること', () => {
    const { container } = render(<Default />);

    // class名が固定値の "menuBtn" であることを期待
    const menuBtn = container.querySelector('.menuBtn');
    expect(menuBtn).toBeInTheDocument();

    const sideMenu = container.querySelector(`.${styles.sideMenu}`);
    expect(sideMenu).not.toHaveClass(styles.open);
  });

  it('ハンバーガーボタンをクリックするとサイドメニューが表示されること', () => {
    const { container } = render(<Default />);

    const menuBtn = container.querySelector('.menuBtn') as HTMLElement;
    fireEvent.click(menuBtn);

    const sideMenu = container.querySelector(`.${styles.sideMenu}`);
    expect(sideMenu).toHaveClass(styles.open);
  });

  it('オーバーレイをクリックするとがサイドメニューが閉じること', () => {
    const { container } = render(<Default />);

    const menuBtn = container.querySelector('.menuBtn') as HTMLElement;
    fireEvent.click(menuBtn);

    const sideMenu = container.querySelector(`.${styles.sideMenu}`);
    expect(sideMenu).toHaveClass(styles.open);

    const overlay = container.querySelector(`.${styles.overlay}`) as HTMLElement;
    fireEvent.click(overlay);

    expect(sideMenu).not.toHaveClass(styles.open);
  });

  it('閉じるをクリックするとがサイドメニューが閉じること', () => {
    const { container } = render(<Default />);

    const menuBtn = container.querySelector('.menuBtn') as HTMLElement;
    fireEvent.click(menuBtn);

    const sideMenu = container.querySelector(`.${styles.sideMenu}`);
    expect(sideMenu).toHaveClass(styles.open);

    fireEvent.click(menuBtn);
    expect(sideMenu).not.toHaveClass(styles.open);
  });
});
