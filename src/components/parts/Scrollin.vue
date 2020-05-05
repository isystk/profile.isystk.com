<template>
  <div class="fadein" :class="[classObject, { scrollin: isInScreen }]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Scrollin extends Vue {
  scroll = 0;
  windowHeight = 0;

  @Prop()
  classObject?: {};

  isInScreen = false;

  mounted(): void {
    window.addEventListener("load", this.onScroll);
    window.addEventListener("scroll", this.onScroll);
  }

  beforeDestroy(): void {
    window.removeEventListener("load", this.onScroll);
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll(): void {
    this.scroll = window.pageYOffset || document.documentElement.scrollTop;
    this.windowHeight = window.innerHeight;
    // console.log(
    //   "scroll:%s,position:%s,windowHeight:%s",
    //   this.scroll,
    //   this.getPosition(),
    //   this.windowHeight
    // );
    if (
      this.scroll >
      this.getPosition() - this.windowHeight + this.windowHeight / 10
    ) {
      this.isInScreen = true;
    }
  }

  getPosition(): number {
    const el = this.$el as HTMLElement;
    if (el) {
      return el.offsetTop;
    } else {
      return 0;
    }
  }
}
</script>
