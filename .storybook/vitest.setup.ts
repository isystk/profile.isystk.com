import { beforeAll, vi } from 'vitest';
import { setProjectAnnotations } from '@storybook/react';
import * as projectAnnotations from './preview';
import '@testing-library/jest-dom';

const project = setProjectAnnotations([projectAnnotations]);

beforeAll(project.beforeAll);

// ESLintのルールに従い、非同期 import でモックを定義
vi.mock('next/router', async () => import('@storybook/nextjs/router.mock'));
vi.mock('next/navigation', async () => import('@storybook/nextjs/navigation.mock'));

if (typeof Element !== 'undefined' && !Element.prototype.animate) {
  Element.prototype.animate = vi.fn().mockReturnValue({
    finished: Promise.resolve(),
    cancel: vi.fn(),
    pause: vi.fn(),
    play: vi.fn(),
    reverse: vi.fn(),
    finish: vi.fn(),
    currentTime: 0,
    effect: {
      getComputedTiming: () => ({ progress: 1 }),
    },
  });
}
