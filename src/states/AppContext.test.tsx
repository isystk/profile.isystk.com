import React, { JSX } from 'react';
import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { AppProvider, useAppState, useAppDispatch } from './AppContext';
import RootState from '@/states/root';

describe('AppContext', () => {
  it('AppProvider 配下では初期状態として新しい RootState を持つこと', () => {
    const { result } = renderHook(() => useAppState(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <AppProvider>{children as JSX.Element}</AppProvider>
      ),
    });
    expect(result.current.root).toBeInstanceOf(RootState);
    expect(result.current.root.isLoading).toBe(false);
  });

  it('SET_STATE アクションで root が更新されること', () => {
    const { result } = renderHook(
      () => {
        const state = useAppState();
        const dispatch = useAppDispatch();
        return { state, dispatch };
      },
      {
        wrapper: ({ children }: { children: React.ReactNode }) => (
        <AppProvider>{children as JSX.Element}</AppProvider>
      ),
      },
    );

    const newRoot = new RootState();
    newRoot.isLoading = true;

    act(() => {
      result.current.dispatch({ type: 'SET_STATE', payload: newRoot });
    });

    expect(result.current.state.root).toBe(newRoot);
    expect(result.current.state.root.isLoading).toBe(true);
  });

  it('AppProvider の外で useAppState を呼ぶとエラーになること', () => {
    const { result } = renderHook(() => {
      try {
        useAppState();
        return null;
      } catch (e) {
        return e as Error;
      }
    });
    expect(result.current).toBeInstanceOf(Error);
    expect(result.current?.message).toBe('useAppState must be used within AppProvider');
  });

  it('AppProvider の外で useAppDispatch を呼ぶとエラーになること', () => {
    const { result } = renderHook(() => {
      try {
        useAppDispatch();
        return null;
      } catch (e) {
        return e as Error;
      }
    });
    expect(result.current).toBeInstanceOf(Error);
    expect(result.current?.message).toBe('useAppDispatch must be used within AppProvider');
  });
});
