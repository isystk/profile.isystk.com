import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

const { Blue } = composeStories(stories);

describe('HorizontalRule', () => {
  beforeEach(() => {
    // IntersectionObserver をモックして即座に交差（表示）状態にする
    // vitest v4 では new 演算子で呼び出すモックに mockReturnValue が使えないため mockImplementation を使う
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockImplementation(function () {
      return {
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
      };
    });
    vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);
  });

  it('hr要素がレンダリングされること', () => {
    const { container } = render(<Blue />);
    const hrElement = container.querySelector('hr');
    expect(hrElement).toBeInTheDocument();
  });

  it('指定したvariantのクラスが付与されていること', () => {
    const { container } = render(<Blue variant="blue" />);
    const hrElement = container.querySelector('hr');
    // styles.blue が適用されているか（CSS Modules のため部分一致チェック）
    expect(hrElement?.className).toContain('blue');
  });
});
