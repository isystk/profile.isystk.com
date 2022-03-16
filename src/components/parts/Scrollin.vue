<template>
  <div :class="[classDefault, isInScreen ? classChange : '']">
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
  classDefault?: [];

  @Prop()
  classChange?: string;

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
    if (!process.browser) {
      return;
    }
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
      this.getPosition() - this.windowHeight + this.windowHeight / 5
    ) {
      this.isInScreen = true;
      // 表示が完了したらスクロールイベントを削除
      window.removeEventListener("load", this.onScroll);
      window.removeEventListener("scroll", this.onScroll);
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
