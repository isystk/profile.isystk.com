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
  console.log(
    'scroll:%s,position:%s,windowHeight:%s',
    state.scroll,
    getPosition(),
    state.windowHeight
  )
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
    return el.getBoundingClientRect().top
  } else {
    return 0
  }
}
</script>
