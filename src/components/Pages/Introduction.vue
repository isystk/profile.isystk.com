<template>
  <v-card id="introduction">
    <v-container fluid class="container">
      <elements-scrollin :class-default="'fadein'" :class-change="'scrollin'">
        <h2>INTRODUCTION</h2>
      </elements-scrollin>
      <hr :class="{ centerToSide: isScreenin() }" />
      <v-row dense>
        <v-col cols="12" md="6">
          <elements-scrollin
            :class-default="'fadein'"
            :class-change="'scrollin'"
          >
            <img :src="profileData.imageUrl" />
          </elements-scrollin>
        </v-col>
        <v-col cols="12" md="6">
          <elements-scrollin
            :class-default="'fadein'"
            :class-change="'scrollin'"
          >
            <span v-html="profileData.message"></span>
          </elements-scrollin>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import { ref, reactive, onBeforeMount, onBeforeUnmount } from 'vue'

const state = reactive({
  // スクロール位置
  scroll: 0,
  // 表示画面の高さ
  windowHeight: 0,
})

onBeforeMount(() => {
  window.addEventListener('load', onScroll)
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('load', onScroll)
  window.removeEventListener('scroll', onScroll)
})

// 画面スクロール時の処理
const onScroll = (): void => {
  if (!process.browser) {
    return
  }
  state.scroll = window.pageYOffset || document.documentElement.scrollTop
  state.windowHeight = window.innerHeight
}

// 要素が画面内に表示されているかどうか
const componentRef = ref<HTMLElement | null>(null)
const isScreenin = (): boolean => {
  if (!process.browser) {
    return false
  }
  const el = componentRef.value
  if (
    el &&
    state.scroll > el.offsetTop - state.windowHeight + state.windowHeight / 3
  ) {
    return true
  }
  return false
}

// 自己紹介データ
const profileData = {
  // return portfolioModule.profile
  imageUrl: '/img/avatar.jpg',
  message:
    'はじめまして。伊勢と申します。Webを中心にシステムエンジニアとして18年ほど業務しています。\n新卒では中小企業のSIerに入社しました。SESとして常駐先で基本設計から開発/テストまでウォーターフォール型のシステム開発を学び、Javaを中心に証券会社や保険会社などの基幹システム開発に携わりました。\n5年努めたのちSOHOとして独立、独立後はソーシャルゲーム開発やReact.jsやVue.jsなどフロントエンドの技術を学びました。現在は、故郷の北海道（函館）に移住して、フルリモートでシステムエンジニアに従事しております。サーバーサイドからフロントエンド、サーバー構築までフルスタックに対応致します。\n(2022年3月更新)',
  twitter_follower: 6832,
}
</script>

<style lang="scss" scoped>
/* 5-1 自己紹介 */

#introduction .text {
  font-size: 16px;
  line-height: 1.5;
  padding: 10px;
  text-align: left;
}
#introduction .avatar img {
  border-radius: 50%;
  width: 50%;
}

@media screen and (min-width: 992px) {
  #introduction .box {
    flex-direction: row-reverse;
  }
  #introduction .text {
    font-size: 18px;
  }
}
</style>
