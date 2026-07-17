import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppWrapper from './AppWrapper';
import useAppRoot from '@/states/useAppRoot';

vi.mock('@/states/useAppRoot');

describe('AppWrapper', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('service が未取得の間は何も表示しないこと', () => {
    vi.mocked(useAppRoot).mockReturnValue({
      state: undefined,
      service: undefined,
    } as unknown as ReturnType<typeof useAppRoot>);

    const { container } = render(
      <AppWrapper>
        <p>子要素</p>
      </AppWrapper>,
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('portfolio.read が完了した後に子要素が表示されること', async () => {
    const read = vi.fn().mockResolvedValue(undefined);
    vi.mocked(useAppRoot).mockReturnValue({
      state: {},
      service: { portfolio: { read } },
    } as unknown as ReturnType<typeof useAppRoot>);

    render(
      <AppWrapper>
        <p>子要素</p>
      </AppWrapper>,
    );

    await waitFor(() => {
      expect(screen.getByText('子要素')).toBeInTheDocument();
    });
    expect(read).toHaveBeenCalledTimes(1);
  });
});
