<template>
  <span id="page-top" class="link" :class="{ hide: !isShow }">
    <a href="#" @click.prevent="moveToTop">
      <font-awesome-icon :icon="['fas', 'chevron-up']" />
    </a>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class PageTop extends Vue {
  isShow = false;

  mounted(): void {
    window.addEventListener("load", this.onScroll);
    window.addEventListener("scroll", this.onScroll);
  }

  beforeDestroy(): void {
    window.removeEventListener("load", this.onScroll);
    window.removeEventListener("scroll", this.onScroll);
  }

  // 画面スクロール時の処理
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;

    const topBtn = document.getElementById("page-top") as HTMLInputElement;

    if (scrollTop > windowHeight) {
      if (!this.isShow) {
        this.isShow = true;
      }
    } else if (this.isShow) {
      this.isShow = false;
    }
  }

  // スクロールしてトップ
  moveToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
</script>
