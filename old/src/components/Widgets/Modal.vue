<template lang="pug">
v-dialog(v-model='_isOpen')
  v-card
    v-card-title.card-header
      | {{ title }}
      v-spacer
      v-btn(icon='' @click='handleClose')
        v-icon mdi-close
    v-divider
    v-card-text
      slot
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  title: string
  isOpen: boolean
  handleClose: () => void
}>()
const _isOpen = computed(() => {
  return props.isOpen
})
</script>
