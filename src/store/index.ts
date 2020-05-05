import { ActionContext } from "vuex";

/**
 * store 用インターフェイス
 */
export interface StateInterface {
  isServerInitCalled: boolean;
  isClientInitCalled: boolean;
}

/**
 * state
 */
// @ts-ignore
export const state = (): StateInterface => ({
  isServerInitCalled: false,
  isClientInitCalled: false
});

/**
 * getters
 */
export const getters = {
  isServerInitCalled(state: StateInterface): boolean {
    return state.isServerInitCalled;
  },
  isClientInitCalled(state: StateInterface): boolean {
    return state.isClientInitCalled;
  }
};

/**
 * mutations
 */
export const mutations = {
  setIsServerInitCalled(state: StateInterface): void {
    state.isServerInitCalled = true;
  },
  setIsClientInitCalled(state: StateInterface): void {
    state.isClientInitCalled = true;
  }
};

/**
 * actions
 */
export const actions = {
  /**
   * サーバー初期化時の処理
   */
  async nuxtServerInit(
    // @ts-ignore
    { dispatch, commit, state }: ActionContext<any, any>,
    // @ts-ignore
    { req, res, error }
  ): Promise<void> {
    await console.log("nuxtServerInit");
    // commit("setIsServerInitCalled");

    // // ログインチェック
    // await dispatch("auth/loginCheck", {} as ILoginCheckPayload);
  }
};
