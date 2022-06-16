<template>
  <hr
    :class="[classDefault, { centerToSide: isInScreen }]"
    ref="componentRef"
  />
</template>

<script lang="ts" setup>
const props = defineProps<{
  classDefault?: []
  classChange?: string
}>()

import useScrollin from '@/helper/scrollin'
const { componentRef, isInScreen } = useScrollin()
</script>

<style lang="scss" scoped>
hr {
  width: 100px;
  margin: 20px auto 40px;
  transform: scaleY(1) scaleX(0);
  border: 2px solid #000d6d;
}

hr.white {
  border-color: #fff;
}

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
