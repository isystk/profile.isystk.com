<template lang="pug">
span#page-top.link(:class='{ hide: !state.isShow }')
  a(href='#' @click.prevent='moveToTop')
    v-icon(icon='mdi-chevron-up')
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
  isShow: boolean
}
const state = reactive<State>({
  isShow: false,
})

onBeforeMount(() => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
onMounted(() => {
  onScroll()
})

// 画面スクロール時の処理
const onScroll = (): void => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const windowHeight = window.innerHeight
  if (scrollTop > windowHeight) {
    if (!state.isShow) {
      state.isShow = true
    }
  } else if (state.isShow) {
    state.isShow = false
  }
}

// スクロールしてトップ
const moveToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped>
#page-top {
  position: fixed;
  bottom: 45px;
  right: 16px;
  z-index: 100;
  transition: top 0.5s, bottom 0.5s;
  opacity: 0.8;
}
#page-top a {
  background: #000d6d;
  color: #fff;
  width: 60px;
  padding: 16px 0;
  text-align: center;
  display: block;
  border-radius: 30px;
}
#page-top.hide {
  bottom: -100px;
}
</style>
