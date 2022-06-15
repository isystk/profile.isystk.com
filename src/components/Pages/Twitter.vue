<template>
  <v-card id="twitter">
    <v-container fluid class="container">
      <elements-scrollin class-default="fadein" class-change="scrollin">
        <h2 class="text-center">Twitter</h2>
      </elements-scrollin>
      <elements-hr />
      <v-row dense>
        <v-col cols="12" md="6" class="mb-10 mb-md-0">
          <div ref="componentRef">
            <p class="title">フォロワー数</p>
            <div class="followers js-shuffleNum">
              {{ state.twitterFollower }}
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <elements-scrollin class-default="fadein" class-change="scrollin">
            <div v-if="state.isShowTwitter" class="tweet text-center" >
              <a
                  class="twitter-timeline"
                  data-chrome="noheader,nofooter"
                  :data-height="state.twitterTimeline.height"
                  :data-dnt="state.twitterTimeline.dnt"
                  :href="state.twitterTimeline.href"
              >
                Tweets by ise0615
              </a>
            </div>
          </elements-scrollin>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import {ref, reactive, onBeforeMount, onBeforeUnmount, onMounted} from 'vue'
import { injectStore } from '@/store'
import MainService from '@/services/main'
const main = injectStore<MainService>()

type State = {
  scroll: number
  windowHeight: number
  isInScreen: boolean
  isShowTwitter: boolean
  twitterFollower: number
}

const state = reactive<State>({
  scroll: 0,
  windowHeight: 0,
  isInScreen: false,
  isShowTwitter: false,
  twitterFollower: 0,
  twitterTimeline: {
      height: 400,
      dnt: true,
      href:"https://twitter.com/ise0615?ref_src=twsrc%5Etfw"
  }
})

onBeforeMount((): void => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount((): void => {
  window.removeEventListener('scroll', onScroll)
})
onMounted(() => {
  onScroll()
})

useHead({
  script: [
    {type: 'text/javascript', async: true, src: 'https://platform.twitter.com/widgets.js'}
  ]
})

// 画面スクロール時の処理
const onScroll = (): void => {
  state.scroll = window.pageYOffset || document.documentElement.scrollTop
  state.windowHeight = window.innerHeight

  // 数字のランダム表示
  if (state.scroll > getPosition() - state.windowHeight + state.windowHeight / 3) {
    if (!state.isShowTwitter) {
      // ツイッターフォロワー数
      const defautVal = main?.profile.data["twitter_follower"]
      let count = 0
      let id = 0
      const setRandom = function (): void {
        const random = Math.floor(Math.random() * 9999)
        state.twitterFollower = random
        count++
        if (count > 50) {
          clearInterval(id)
          state.twitterFollower = defautVal
        }
      }
      id = window.setInterval(setRandom, 20)

      // Twitterタイムラインのロード
      window.twttr.widgets.load()
      
      state.isShowTwitter = true
    }
  }
  if (state.scroll < getPosition() - state.windowHeight) {
    state.isShowTwitter = false
    state.twitterFollower = 0;
  }
}

const componentRef = ref<HTMLElement | null>(null)
const getPosition = (): number => {
  const el = componentRef.value
  if (el) {
    const rect = el.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return rect.top + scrollTop // offset().top;
  } else {
    return 0
  }
}

</script>

<style lang="scss" scoped>
#twitter {
}

#twitter .title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
}
#twitter .followers {
  text-align: center;
  font-size: 80px;
}

@media screen and (min-width: 992px) {
}
</style>
