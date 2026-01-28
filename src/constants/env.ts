type EnvType = {
  /** アプリ名 */
  APP_NAME: string;
  /** アプリの説明 */
  APP_DESCRIPTION: string;
  /** 環境名 */
  ENV_NAME: string;
  /** アプリ URL */
  APP_URL: string;
  /** エンドポイント URL */
  ENDPOINT_URL: string;
  /** Stripe キー */
  STRIPE_KEY: string;
};

let Env = {
  APP_NAME: 'LaraEC',
  APP_DESCRIPTION: ' Next.js、Storybook、Vitest のボイラープレートです。 ',
  ENV_NAME: 'local',
  APP_URL: 'http://localhost',
  ENDPOINT_URL: 'https://localhost/api',
  STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
} as EnvType;
if (process.env.NEXT_PUBLIC_ENV_NAME === 'production') {
  Env = {
    ...Env,
    ENV_NAME: process.env.NEXT_PUBLIC_ENV_NAME,
    APP_URL: process.env.APP_URL,
    ENDPOINT_URL: process.env.NEXT_PUBLIC_ENDPOINT_URL,
    STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
  } as EnvType;
}

export default Env;
