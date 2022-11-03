<template lang="pug">
div(ref='componentRef' :class="[classDefault, isInScreen ? classChange : '']")
  slot
</template>

<script lang="ts" setup>
const props = defineProps<{
  classDefault?: string
  classChange?: string
}>()
import useScrollin from '@/helper/scrollin'
const { componentRef, isInScreen } = useScrollin()
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
