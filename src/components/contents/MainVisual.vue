<template>
  <div>
    <div class="vide-wrap">
      <video muted="" playsinline="" loop="" autoplay="" preload="metadata">
        <source data-src="/video/mv.mp4" type="video/mp4" src="/video/mv.mp4" />
        <source
          data-src="/video/mv.webm"
          type="video/webm"
          src="/video/mv.webm"
        />
      </video>
    </div>
    <div class="mv">
      <div class="intro">
        <div>
          <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
            <p class="title ">
              ITエンジニアを活きる
            </p>
          </Scrollin>
          <br />
          <Scrollin
            :class-default="'fadein'"
            :class-change="'scrollin scrollin-delay1'"
          >
            <p class="name">
              Yoshitaka Ise
            </p>
          </Scrollin>
        </div>
      </div>
      <Scrollin
        :class-default="'fadein'"
        :class-change="'scrollin scrollin-delay2'"
      >
        <div class="link">
          <a href="#" @click.prevent="linkToIntroduction">
            SCROLL<br />
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </a>
        </div>
      </Scrollin>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Scrollin from "@/components/parts/Scrollin.vue";

@Component({
  components: {
    Scrollin
  }
})
export default class MainVisual extends Vue {
  // メインビジュアルのスクロールリンク
  linkToIntroduction(): void {
    const introduction = document.getElementById(
      "introduction"
    ) as HTMLInputElement;

    window.scrollTo({
      top: introduction.offsetTop,
      behavior: "smooth"
    });
  }
}
</script>
