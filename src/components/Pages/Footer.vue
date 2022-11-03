<template lang="pug">
v-footer.d-flex.flex-column(color='primary')
  .mt-10.mb-10
    v-btn.mx-4.text-white(v-for='(item, index) in items' :key='index' :icon='item.icon' variant='text' @click='locate(item)')
  .text-white.pt-0 © 2020 isystk's sample
</template>

<script setup lang="ts">
import MainService from '@/services/main'
const props = defineProps<{
  store: MainService
}>()
const items = [
  { icon: 'mdi-facebook', link: 'https://www.facebook.com/ise0615/' },
  { icon: 'mdi-twitter', link: 'https://twitter.com/ise0615/' },
  { icon: 'mdi-instagram', link: 'https://www.instagram.com/isystk/' },
  { icon: 'mdi-github', link: 'https://github.com/isystk/' },
]
const locate = (item) => {
  window.open(item.link, '_blank')
}
</script>
