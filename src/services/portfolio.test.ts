import { describe, it, expect, vi, afterEach } from 'vitest';
import MainService from '@/services/main';
import RootState from '@/states/root';

describe('PortfolioService', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const setup = () => {
    const root = new RootState();
    const setRootState = vi.fn();
    const main = new MainService(root, setRootState);
    return { main, setRootState };
  };

  it('read が成功した場合、取得したデータを portfolio に反映して setRootState を呼ぶこと', async () => {
    const { main, setRootState } = setup();
    const responseData = {
      profile: {
        name: 'テスト太郎',
        imageUrl: '',
        message: '',
        twitter_follower: 0,
        updated_at: '',
      },
      news: [{ title: 'news', text: '', url: '', imageUrl: '', date: '' }],
    };
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        json: vi.fn().mockResolvedValue(responseData),
      }),
    );

    await main.portfolio.read();

    expect(main.root.portfolio.profile).toEqual(responseData.profile);
    expect(main.root.portfolio.news).toEqual(responseData.news);
    expect(setRootState).toHaveBeenCalled();
  });

  it('read が失敗した場合、例外をそのまま re-throw すること', async () => {
    const { main } = setup();
    const error = new Error('network error');
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(error));

    await expect(main.portfolio.read()).rejects.toThrow('network error');
  });
});
