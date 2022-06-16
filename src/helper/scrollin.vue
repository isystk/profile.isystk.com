<script lang="ts">
import {
  ref,
  reactive,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  computed,
} from 'vue'
export default function useScrollin() {
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

  return {
    componentRef,
    isInScreen: computed(() => state.isInScreen),
  }
}
</script>
