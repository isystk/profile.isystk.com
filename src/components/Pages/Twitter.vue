<template>
  <v-card id="twitter" ref="componentRef">
    <v-container fluid class="container">
      <elements-scrollin class-default="fadein" class-change="scrollin">
        <h2>Twitter</h2>
      </elements-scrollin>
      <hr :class="{ centerToSide: isScreenin() }" />
      <div class="box">
        <div class="box_item">
          <p class="title">フォロワー数</p>
          <div class="followers js-shuffleNum">
            {{ twitterFollower }}
          </div>
        </div>
        <div class="box_item">
          <elements-scrollin class-default="fadein" class-change="scrollin">
            <div v-if="state.isShowTwitter" class="tweet" style="height: 400px">
              <a
                class="twitter-timeline"
                data-height="400"
                data-dnt="true"
                data-chrome="noheader,nofooter"
                href="https://twitter.com/ise0615?ref_src=twsrc%5Etfw"
              >
                Tweets by ise0615
              </a>
              <!--              <script-->
              <!--                  async-->
              <!--                  src="https://platform.twitter.com/widgets.js"-->
              <!--                  charset="utf-8"-->
              <!--              ></script>-->
            </div>
          </elements-scrollin>
        </div>
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
} from 'vue'

type State = {
  scroll: number
  windowHeight: number
  isInScreen: boolean
  isShowTwitter: boolean
}

const state = reactive<State>({
  scroll: 0,
  windowHeight: 0,
  isInScreen: false,
  isShowTwitter: false,
})

onBeforeMount((): void => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount((): void => {
  window.removeEventListener('scroll', onScroll)
})

// 画面スクロール時の処理
const onScroll = (): void => {
  state.scroll = window.pageYOffset || document.documentElement.scrollTop
  state.windowHeight = window.innerHeight

  // 数字のランダム表示
  const twitter = document.getElementById('twitter') as HTMLInputElement
  if (
    state.scroll >
    twitter.offsetTop - state.windowHeight + state.windowHeight / 3
  ) {
    if (!state.isShowTwitter) {
      const shuffleNum = document.querySelector(
        '.js-shuffleNum'
      ) as HTMLInputElement
      const defautVal = shuffleNum.textContent
      let count = 0
      let id = 0
      const setRandom = function (): void {
        const random = Math.floor(Math.random() * 9999)
        shuffleNum.textContent = random + ''
        count++
        if (count > 50) {
          clearInterval(id)
          shuffleNum.textContent = defautVal
        }
      }
      id = window.setInterval(setRandom, 20)

      state.isShowTwitter = true
    }
  }
}

// 要素が画面内に表示されているかどうか
const isScreenin = (): boolean => {
  if (
    state.scroll >
    getPosition() - state.windowHeight + state.windowHeight / 3
  ) {
    return true
  }
  return false
}

const componentRef = ref<HTMLElement | null>(null)
const getPosition = (): number => {
  const el = componentRef.value
  if (el) {
    return el.offsetTop
    // return el.getBoundingClientRect().top
  } else {
    return 0
  }
}

// ツイッターフォロワー数
const twitterFollower = 6832
</script>

<style lang="scss" scoped>
#twitter {
}

#twitter .title {
  font-size: 20px;
  margin-bottom: 30px;
}
#twitter .followers {
  font-size: 80px;
}

@media screen and (min-width: 992px) {
}
</style>
