<template lang="pug">
v-card#twitter
  v-container.container(fluid='')
    elements-scrollin(class-default='fadein' class-change='scrollin')
      h2.text-center Twitter
    elements-hr
    v-row(dense='')
      v-col.mb-10.mb-md-0(cols='12' md='6')
        div(ref='componentRef')
          p.title フォロワー数
          .followers.js-shuffleNum
            | {{ state.twitterFollower }}
      v-col(cols='12' md='6')
        elements-scrollin(class-default='fadein' class-change='scrollin')
          .tweet.text-center(v-if='state.isShowTwitter')
            a.twitter-timeline(data-chrome='noheader,nofooter' :data-height='state.twitterTimeline.height' :data-dnt='state.twitterTimeline.dnt' :href='state.twitterTimeline.href')
              | Tweets by ise0615
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { injectStore } from '@/store'
import MainService from '@/services/main'
const main = injectStore<MainService>()

type State = {
  isShowTwitter: boolean
  twitterFollower: number
}

const state = reactive<State>({
  isShowTwitter: false,
  twitterFollower: 0,
  twitterTimeline: {
    height: 400,
    dnt: true,
    href: 'https://twitter.com/ise0615?ref_src=twsrc%5Etfw',
  },
})

useHead({
  script: [
    {
      type: 'text/javascript',
      async: true,
      src: 'https://platform.twitter.com/widgets.js',
    },
  ],
})

import useScrollin from '@/helper/scrollin'
const { componentRef, isInScreen } = useScrollin()

watch(isInScreen, () => {
  if (isInScreen) {
    if (!state.isShowTwitter) {
      // ツイッターフォロワー数
      const defautVal = main?.profile.data['twitter_follower']
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
})
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
