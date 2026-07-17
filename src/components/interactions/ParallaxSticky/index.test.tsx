import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';
import ParallaxSticky from './index';
import styles from './styles.module.scss';

const { Default } = composeStories(stories);

describe('ParallaxSticky Storybook Tests', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('初期表示状態を確認', async () => {
    render(<Default />);
    expect(screen.getByText(/タイトル/)).toBeInTheDocument();
  });

  it('indicator を指定しない場合はインジケーターが表示されないこと', () => {
    const { container } = render(
      <ParallaxSticky height="1000px">
        <div>コンテンツ</div>
      </ParallaxSticky>,
    );
    expect(container.querySelector(`.${styles.scrollBarWrapper}`)).not.toBeInTheDocument();
  });

  it('indicator=true の場合、スクロール量に応じてインジケーターの高さが更新されること', () => {
    Object.defineProperty(HTMLDivElement.prototype, 'offsetTop', {
      configurable: true,
      value: 0,
    });
    Object.defineProperty(HTMLDivElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 1000,
    });
    vi.stubGlobal('innerHeight', 500);
    vi.stubGlobal('scrollY', 250);

    const { container } = render(
      <ParallaxSticky height="1000px" indicator={true}>
        <div>コンテンツ</div>
      </ParallaxSticky>,
    );

    fireEvent.scroll(window);

    // percent = ((scrollY - offsetTop) / (offsetHeight - innerHeight)) * 100 = (250 - 0) / (1000 - 500) * 100 = 50
    const thumb = container.querySelector(`.${styles.scrollBarThumb}`) as HTMLElement;
    expect(thumb).toBeInTheDocument();
    expect(thumb.style.height).toBe('50%');
  });

  it('スクロール量が範囲外の場合は 0% ～ 100% にクランプされること', () => {
    Object.defineProperty(HTMLDivElement.prototype, 'offsetTop', {
      configurable: true,
      value: 0,
    });
    Object.defineProperty(HTMLDivElement.prototype, 'offsetHeight', {
      configurable: true,
      value: 1000,
    });
    vi.stubGlobal('innerHeight', 500);
    vi.stubGlobal('scrollY', -100);

    const { container } = render(
      <ParallaxSticky height="1000px" indicator={true}>
        <div>コンテンツ</div>
      </ParallaxSticky>,
    );

    fireEvent.scroll(window);

    const thumb = container.querySelector(`.${styles.scrollBarThumb}`) as HTMLElement;
    expect(thumb.style.height).toBe('0%');
  });
});
