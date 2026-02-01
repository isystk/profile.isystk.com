import Env from '@/constants/env';

const getBffUrl = (path: string): string => {
  return [Env.ENDPOINT_URL, path].join('');
};

/** API のエンドポイント */
export const Api = {
  /** ポートフォリオの取得 */
  Portfolio: getBffUrl('/portfolio.json'),
};
