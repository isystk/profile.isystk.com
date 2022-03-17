import { Store } from "vuex";
import { ActionContext } from "vuex/types";
import { Context } from "@nuxt/types";
import { initialiseStores } from "~/utilities/store-accessor";

// RootStateを追加
export const state = () => ({});
export type RootState = ReturnType<typeof state>;

const initializer = (store: Store<any>) => initialiseStores(store);
export const plugins = [initializer];

// Rootのactionsを追加
export const actions = {
  nuxtServerInit: async (
    context: ActionContext<RootState, RootState>,
    server: Context
  ) => {
    // nuxtServerInitの処理
  },
};

export * from "~/utilities/store-accessor";
