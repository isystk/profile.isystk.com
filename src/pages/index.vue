<template lang="pug">
div
  pages-main-visual
  .contents
    pages-introduction
    pages-specialty
    pages-skills
    pages-outputs
    pages-twitter
    pages-thanks
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
useMeta({
  title: 'ポートフォリオ｜伊勢 功崇（いせ よしたか）',
})
import { injectStore } from '@/store'
const main = injectStore()
onBeforeMount(async () => {
  await main.readAll()
})
</script>
