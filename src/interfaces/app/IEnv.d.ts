/**
 * Env インターフェイス
 */
export interface IEnv {
  /** 環境名 */
  envName: string;
  /** 静的ページかどうか(generate用) */
  isStatic: boolean;
  /** 内部向けエンドポイント URL */
  internalEndpointUrl: string;
  /** 外部向けエンドポイント URL */
  externalEndpointUrl: string;
}
