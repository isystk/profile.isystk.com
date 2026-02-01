import Env from '@/constants/env';

const getBffUrl = (path: string): string => {
  return [Env.ENDPOINT_URL, path].join('');
};

/** API のエンドポイント */
export const Api = {
  /** プロフィール */
  Profile: getBffUrl('/profile.json'),
};
