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

<style lang="scss" scoped>
.header .header-logo {
  margin: 20px 0 20px 15px;
  font-size: 20px;
  color: #fff;
  position: absolute;
}

@media screen and (min-width: 992px) {
  .header .header-logo {
    margin: 15px 0 15px 20px;
    font-size: 30px;
  }
}
</style>
