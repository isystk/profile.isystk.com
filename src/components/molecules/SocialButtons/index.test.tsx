import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import * as stories from './index.stories';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

const { Default } = composeStories(stories);

describe('SocialButtons Storybook Tests', () => {
  it('SNSリンクが正しくレンダリングされること', () => {
    render(<Default />);

    const facebookLink = screen.getByLabelText('Facebook');
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute('target', '_blank');
    expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('GitHubリンクが表示されていること', () => {
    render(<Default />);
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
  });
});
