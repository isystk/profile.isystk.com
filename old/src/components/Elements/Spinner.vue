<template lang="pug">
div(:class='className')
  v-progress-circular(indeterminate='' :size='50')
    span.sr-only {{ label }}
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
  computed: {
    className: function () {
      const name = 'text-center'
      return name
    },
  },
}
</script>
