import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll, type MockInstance } from 'vitest';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

const { RadarChart, DoughnutChart } = composeStories(stories);

describe('SkillChart Tests', () => {
  let consoleSpy: MockInstance;

  beforeAll(() => {
    // 1. IntersectionObserver のグローバルモック
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn((cb: (entries: Array<{ isIntersecting: boolean }>) => void) => ({
        observe: () => cb([{ isIntersecting: true }]),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    // 2. ResizeObserver のグローバルモック
    vi.stubGlobal(
      'ResizeObserver',
      vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      })),
    );

    // 3. Chart.js のエラーログを抑制
    consoleSpy = vi.spyOn(console, 'error').mockImplementation((message: unknown) => {
      if (typeof message === 'string' && message.includes('Failed to create chart')) return;
      console.warn(message);
    });

    // 4. Canvas のモック
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      canvas: { style: {} },
      measureText: vi.fn(() => ({ width: 0 })),
      fillRect: vi.fn(),
      clearRect: vi.fn(),
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      stroke: vi.fn(),
      closePath: vi.fn(),
      save: vi.fn(),
      restore: vi.fn(),
    } as unknown as CanvasRenderingContext2D);
  });

  afterAll(() => {
    consoleSpy.mockRestore();
    vi.unstubAllGlobals(); // モックを解除
  });

  it('Radarチャートがタイトルと共に正しく表示されること', () => {
    render(<RadarChart />);
    expect(screen.getByText('適応範囲')).toBeInTheDocument();
  });

  it('Doughnutチャートがタイトルと共に正しく表示されること', () => {
    render(<DoughnutChart />);
    expect(screen.getByText('使用言語')).toBeInTheDocument();
  });

  it('Canvas要素が生成されていること', () => {
    const { container } = render(<RadarChart />);
    // isInView が true にならないと描画されないため、モックが cb([{ isIntersecting: true }]) を返していることが重要
    expect(container.querySelector('canvas')).toBeInTheDocument();
  });
});
