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
};

const Env = {
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  APP_DESCRIPTION: process.env.APP_DESCRIPTION,
  ENV_NAME: process.env.NEXT_PUBLIC_ENV_NAME,
  APP_URL: process.env.APP_URL,
  ENDPOINT_URL: process.env.NEXT_PUBLIC_ENDPOINT_URL,
} as EnvType;

export default Env;
