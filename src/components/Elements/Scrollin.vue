<template>
  <div
    ref="componentRef"
    :class="[classDefault, state.isInScreen ? classChange : '']"
  >
    <slot />
  </div>
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

const onScroll = (): void => {
  state.scroll = window.pageYOffset || document.documentElement.scrollTop
  state.windowHeight = window.innerHeight
  // console.log('scroll:%s,position:%s,windowHeight:%s', state.scroll, getPosition(), state.windowHeight)
  if (
    state.scroll >
    getPosition() - state.windowHeight + state.windowHeight / 5
  ) {
    state.isInScreen = true
    // 表示が完了したらスクロールイベントを削除
    window.removeEventListener('scroll', onScroll)
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
/* 下からフェイドインするアニメーション */
.fadein {
  opacity: 0;
  transform: translate(0, 50px);
  -moz-transform: translate(0, 50px);
  -webkit-transform: translate(0, 50px);
}
.fadein.scrollin {
  animation: fadein 0.5s both;
  -moz-animation: fadein 0.5s both;
  -webkit-animation: fadein 0.5s both;
}
.fadein.scrollin-delay1 {
  animation-delay: 0.6s;
}
.fadein.scrollin-delay2 {
  animation-delay: 1.2s;
}
@keyframes fadein {
  0% {
    opacity: 0;
    transform: translate(0, 50px);
    -moz-transform: translate(0, 50px);
    -webkit-transform: translate(0, 50px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
  }
}
</style>