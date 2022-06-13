<template>
  <div>
    <pages-main-visual />
    <div class="contents">
      <pages-introduction />
      <pages-specialty />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
useMeta({
  title: 'ポートフォリオ｜伊勢 功崇（いせ よしたか）',
})
import { injectStore } from '@/store'
const main = injectStore()
onBeforeMount(async () => {
  console.log('beforeMount')
})
</script>
