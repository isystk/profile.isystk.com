<template lang="pug">
.mt-15
  elements-spinner(:label='label' :variant='variant' :small='small')
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Loading...',
    },
    variant: {
      type: String,
      default: 'border',
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
