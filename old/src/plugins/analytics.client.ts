import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag'

// Nuxtプラグインの登録
export default defineNuxtPlugin((nuxtApp) => {
  // ルーター取得
  const router = useRouter()
  const $config = useRuntimeConfig()

  // Vue登録
  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: $config.APP_NAME,
      pageTrackerScreenviewEnabled: true,
      config: { id: import.meta.env.VITE_GOOGLE_ANALYTICS_ID },
    },
    router
  )
})
