import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  describe,
  it,
  expect,
  vi,
  beforeAll,
  beforeEach,
  afterAll,
  type MockInstance,
} from 'vitest';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('Specialty Storybook Tests', () => {
  let consoleSpy: MockInstance;

  beforeAll(() => {
    // 1. console.error のスパイを MockInstance 型で定義して any を排除
    consoleSpy = vi.spyOn(console, 'error').mockImplementation((message: unknown) => {
      if (typeof message === 'string' && message.includes('Failed to create chart')) {
        return;
      }
      console.warn(message);
    });

    // 2. CanvasRenderingContext2D の一部をモックしてキャスト
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      canvas: { style: {} },
      measureText: vi.fn(() => ({ width: 0 })),
      fillRect: vi.fn(),
      clearRect: vi.fn(),
      getImageData: vi.fn(() => ({ data: [] })),
      putImageData: vi.fn(),
      createImageData: vi.fn(() => ({ data: [] })),
      setTransform: vi.fn(),
      drawImage: vi.fn(),
      save: vi.fn(),
      restore: vi.fn(),
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      closePath: vi.fn(),
      stroke: vi.fn(),
      translate: vi.fn(),
      scale: vi.fn(),
      rotate: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
    } as unknown as CanvasRenderingContext2D);
  });

  beforeEach(() => {
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn((cb: (entries: Array<{ isIntersecting: boolean }>) => void) => ({
        observe: () => cb([{ isIntersecting: true }]),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    global.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }));
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('タイトル「SPECIALTY」が表示されること', () => {
    render(<Default />);
    expect(screen.getByText('SPECIALTY')).toBeInTheDocument();
  });

  it('チャートの各セクションタイトルが表示されること', () => {
    render(<Default />);
    expect(screen.getByText('適応範囲')).toBeInTheDocument();
    expect(screen.getByText('得意言語')).toBeInTheDocument();
  });

  it('LINEの問い合わせボタンに正しいリンクが設定されていること', () => {
    render(<Default />);
    const lineButton = screen.getByRole('link', { name: /お問い合わせはこちら/i });
    expect(lineButton).toHaveAttribute('href', expect.stringContaining('line.me'));
  });

  it('Canvas（チャート）がレンダリングされていること', () => {
    const { container } = render(<Default />);
    const canvas = container.querySelectorAll('canvas');
    expect(canvas.length).toBe(2);
  });
});
