import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './index.stories';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('CountUp Tests', () => {
  beforeEach(() => {
    // vitest v4 では new 演算子でアロー関数を呼び出せないため、function式で実装する
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(function (cb) {
        return {
          observe: () => {
            cb([{ isIntersecting: true }]);
            return null;
          },
          unobserve: vi.fn(),
          disconnect: vi.fn(),
        };
      }),
    );
  });

  it('表示領域に入ったらフォロワー数までカウントアップして表示されること', async () => {
    render(<Default value={7626} duration={0.05} />);

    await waitFor(() => {
      expect(screen.getByText('7,626')).toBeInTheDocument();
    });
  });

  it('初期表示は0であること', () => {
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn(function () {
        return {
          observe: vi.fn(),
          unobserve: vi.fn(),
          disconnect: vi.fn(),
        };
      }),
    );
    render(<Default value={7626} />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
