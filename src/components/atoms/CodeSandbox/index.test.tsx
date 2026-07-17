import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('CodeSandbox Storybook Tests', () => {
  it('指定した id で iframe が埋め込まれること', () => {
    const { container } = render(<Default />);
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe?.getAttribute('src')).toContain('codesandbox.io/embed/tx3f8k');
    expect(iframe?.getAttribute('src')).toContain('expanddevtools=0');
  });

  it('isShowConsole を true にするとコンソール表示パラメータが有効になること', () => {
    const { container } = render(<Default isShowConsole={true} />);
    const iframe = container.querySelector('iframe');
    expect(iframe?.getAttribute('src')).toContain('expanddevtools=1');
  });

  it('className が iframe に反映されること', () => {
    const { container } = render(<Default className="custom-class" />);
    const iframe = container.querySelector('iframe');
    expect(iframe).toHaveClass('custom-class');
  });
});
