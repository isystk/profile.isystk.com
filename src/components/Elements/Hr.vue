<template>
  <hr :class="{ centerToSide: state.isInScreen }" ref="componentRef" />
</template>

<script lang="ts" setup>
import { ref, reactive, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'

const props = defineProps<{
  classDefault?: []
  classChange?: string
}>()

type State = {
  scroll: number
  windowHeight: number
  isInScreen: boolean
}

const state = reactive<State>({
  scroll: 0,
  windowHeight: 0,
  isInScreen: false,
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
  state.scroll = window.pageYOffset || document.documentElement.scrollTop
  state.windowHeight = window.innerHeight
  // console.log('scroll:%s,position:%s,windowHeight:%s', state.scroll, getPosition(), state.windowHeight)
  if (state.scroll > getPosition() - state.windowHeight) {
    state.isInScreen = true
  } else {
    // 画面から隠れた場合
    state.isInScreen = false
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
/* 中央からサイドに下線を太くするアニメーション */
.centerToSide {
  animation: centerToSide 0.3s ease 0s 1 forwards;
}
@keyframes centerToSide {
  0% {
    transform: scaleY(1) scaleX(0);
  }
  100% {
    transform: scaleY(1) scaleX(1);
  }
}
</style>
