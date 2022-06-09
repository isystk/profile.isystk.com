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
            <p class="title">ITエンジニアを活きる</p>
          </Scrollin>
          <br />
          <Scrollin
            :class-default="'fadein'"
            :class-change="'scrollin scrollin-delay1'"
          >
            <p class="name">Yoshitaka Ise</p>
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
import { Component, Vue } from 'vue-property-decorator'
import Scrollin from '@/components/parts/Scrollin.vue'

@Component({
  components: {
    Scrollin,
  },
})
export default class MainVisual extends Vue {
  // メインビジュアルのスクロールリンク
  linkToIntroduction(): void {
    const introduction = document.getElementById(
      'introduction'
    ) as HTMLInputElement

    window.scrollTo({
      top: introduction.offsetTop,
      behavior: 'smooth',
    })
  }
}
</script>

<style lang="scss" scoped>
/*--------------------------------------------------------------------

  4 メインビジュアル

--------------------------------------------------------------------*/

.mv {
  height: calc(100vh - 60px);
}
.mv .intro {
  color: #fff;
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  z-index: 1;
  text-align: right;
}
.mv .intro .title {
  text-align: right;
  font-size: 46px;
  line-height: 1;
  letter-spacing: 2px;
  margin-bottom: 30px;
}
.mv .intro .name {
  text-align: right;
  font-size: 30px;
}
.mv .link a {
  font-size: 20px;
  color: #fff;
}

@media screen and (min-width: 992px) {
  .mv .intro {
    width: 75%;
    height: 75%;
  }
  .mv .intro .title {
    font-size: 60px;
  }
  .mv .intro .name {
    font-size: 40px;
  }
}
</style>
