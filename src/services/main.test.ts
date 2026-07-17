import { describe, it, expect, vi } from 'vitest';
import MainService from './main';
import RootState from '@/states/root';

describe('MainService', () => {
  const setup = () => {
    const root = new RootState();
    const setRootState = vi.fn();
    const service = new MainService(root, setRootState);
    return { root, setRootState, service };
  };

  it('生成時に PortfolioService が紐づくこと', () => {
    const { service, root } = setup();
    expect(service.portfolio).toBeDefined();
    expect(service.portfolio.main).toBe(service);
    expect(service.root).toBe(root);
  });

  it('setRootState が root を渡してコールバックを呼ぶこと', () => {
    const { service, root, setRootState } = setup();
    service.setRootState();
    expect(setRootState).toHaveBeenCalledWith(root);
  });

  it('showLoading で isLoading が true になること', () => {
    const { service, root, setRootState } = setup();
    service.showLoading();
    expect(root.isLoading).toBe(true);
    expect(setRootState).toHaveBeenCalledWith(root);
  });

  it('hideLoading で isLoading が false になること', () => {
    const { service, root } = setup();
    service.showLoading();
    service.hideLoading();
    expect(root.isLoading).toBe(false);
  });

  it('showToastMessage でメッセージが設定されること', () => {
    const { service, root, setRootState } = setup();
    service.showToastMessage('保存しました');
    expect(root.toastMessage).toBe('保存しました');
    expect(setRootState).toHaveBeenCalledWith(root);
  });

  it('hideToastMessage でメッセージが null になること', () => {
    const { service, root } = setup();
    service.showToastMessage('保存しました');
    service.hideToastMessage();
    expect(root.toastMessage).toBeNull();
  });
});
