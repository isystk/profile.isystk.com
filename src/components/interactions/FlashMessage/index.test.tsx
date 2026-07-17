import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/react';
import styles from './styles.module.scss';

const { WithMessage, LaravelSessionMessage, ErrorMessage } = composeStories(stories);

describe('FlashMessage Storybook Tests', () => {
  it('フラッシュメッセージが表示されること', () => {
    render(<WithMessage />);
    expect(screen.getByText('これはフラッシュメッセージです。')).toBeInTheDocument();
  });

  it('フラッシュメッセージが表示されること(Laravelのメッセージ)', () => {
    render(<LaravelSessionMessage />);
    expect(screen.getByText('Laravel側のメッセージです')).toBeInTheDocument();
  });

  it('表示された後、グローバル変数からは削除されること', () => {
    render(<LaravelSessionMessage />);
    expect(window.laravelSession.status).toBeUndefined();
  });

  it('5秒後にフラッシュメッセージが消えること', async () => {
    vi.useFakeTimers();
    render(<WithMessage />);
    const message = screen.getByText('これはフラッシュメッセージです。');
    expect(message).toBeInTheDocument();
    await act(async () => {
      vi.advanceTimersByTime(5000);
    });
    vi.useRealTimers();
  });

  it('エラーメッセージが表示されること', () => {
    render(<ErrorMessage />);
    const message = screen.getByText('これはエラーメッセージです。');
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass(styles.error);
  });

  it('fadeOut後にアニメーション終了イベントが発火すると非表示クラスが付与されること', async () => {
    vi.useFakeTimers();
    render(<WithMessage />);
    const message = screen.getByText('これはフラッシュメッセージです。');

    await act(async () => {
      vi.advanceTimersByTime(5000);
    });
    expect(message).toHaveClass(styles.fadeOut);

    fireEvent.animationEnd(message);
    expect(message).toHaveClass(styles.hidden);

    vi.useRealTimers();
  });

  it('fadeOut前にアニメーション終了イベントが発火しても非表示クラスは付与されないこと', () => {
    render(<WithMessage />);
    const message = screen.getByText('これはフラッシュメッセージです。');

    fireEvent.animationEnd(message);
    expect(message).not.toHaveClass(styles.hidden);
  });
});
