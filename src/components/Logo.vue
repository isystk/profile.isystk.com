<template>
  <nuxt-link :to="this.$C.URL.HOME" class="brand-link">
    <h1 class="header-logo">
      isystk's Portfolio
    </h1>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Logo extends Vue {}
</script>
