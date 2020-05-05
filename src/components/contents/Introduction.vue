<template>
  <article id="introduction">
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <h2>
        INTRODUCTION
      </h2>
    </Scrollin>
    <hr :class="{ centerToSide: isScreenin() }" />
    <div class="box">
      <div class="box_item avatar">
        <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
          <img :src="profileData.imageUrl" />
        </Scrollin>
      </div>
      <p class="box_item text">
        <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
          {{ profileData.message }}
        </Scrollin>
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Scrollin from "@/components/parts/Scrollin.vue";
import { portfolioModule, Profile } from "@/store/portfolio";

@Component({
  components: {
    Scrollin
  }
})
export default class Introduction extends Vue {
  // スクロール位置
  scroll = 0;
  // 表示画面の高さ
  windowHeight = 0;

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
    if (!process.browser) {
      return;
    }
    this.scroll = window.pageYOffset || document.documentElement.scrollTop;
    this.windowHeight = window.innerHeight;
  }

  // 要素が画面内に表示されているかどうか
  isScreenin(): boolean {
    if (!process.browser) {
      return false;
    }
    const el = this.$el as HTMLElement;
    if (
      this.scroll >
      el.offsetTop - this.windowHeight + this.windowHeight / 10
    ) {
      return true;
    }
    return false;
  }

  // 自己紹介データ
  get profileData(): Profile {
    return portfolioModule.profile;
  }
}
</script>
