<template lang="pug">
div
  v-breadcrumbs(:items='items')
    template(#text='{ item }')
      | {{ item.text }}
  v-container(:fluid='fluid')
    v-card.mx-auto
      v-card-title.mb-3.card-header
        | {{ items[items.length - 1].text }}
      v-card-text
        slot
</template>

<script setup lang="ts">
import { Url } from '@/constants/url'
import { computed } from 'vue'
type Breadcrumb = {
  text: string
  disabled?: boolean
  href?: string
}
type Props = {
  breadcrumbs: Breadcrumb[]
  small: boolean
}
const { breadcrumbs, small } = withDefaults(defineProps<Props>(), {
  breadcrumbs: () => [],
  small: false,
})
const items = computed(() => {
  return [
    {
      text: 'TOP',
      disabled: false,
      href: Url.TOP,
    },
    ...breadcrumbs,
  ]
})
const fluid = computed(() => (small ? false : 'fluid'))
</script>
