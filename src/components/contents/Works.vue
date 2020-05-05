<template>
  <article id="works">
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <h2>
        WORKS
      </h2>
    </Scrollin>
    <hr :class="{ centerToSide: isScreenin() }" />
    <div class="box">
      <div class="box_item">
        <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
          <div class="mockup">
            <img src="/img/imac.png" width="100%" />
            <div class="site">
              <a href="https://blog.isystk.com/" target="_blank">
                <img src="/img/blog-site.jpg" width="100%" />
              </a>
            </div>
          </div>
        </Scrollin>
      </div>
      <div class="box_item">
        <div class="mockup-description">
          <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
            <div class="number">
              <div class="line"></div>
              <div class="label">
                01
              </div>
            </div>
          </Scrollin>
          <Scrollin
            :class-default="'fadein'"
            :class-change="'scrollin scrollin-delay1'"
          >
            <a href="https://blog.isystk.com/" target="_blank">
              <p class="title">
                isystk's blog
              </p>
              <p class="text">
                私が運営しているブログです。<br />
                主にITエンジニアとして学んだ事を掲載しています。
              </p>
            </a>
          </Scrollin>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box_item">
        <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
          <div class="card">
            <a href="#" target="_blank">
              <div class="photo zoom">
                <img src="/img/java-springboot-boilerplate.jpg" />
              </div>
              <p class="title">Java Springboot Boilerplate</p>
              <p class="text">
                Java Springboot Doma2を利用した<br />
                マルチモジュールのボイラープレートです。
              </p>
            </a>
          </div>
        </Scrollin>
      </div>
      <div class="box_item">
        <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
          <div class="card">
            <a href="#" target="_blank">
              <div class="photo zoom">
                <img src="/img/nuxtjs-typescript-boilerplate.jpg" />
              </div>
              <p class="title">Nuxt.js Typescript Boilerplate</p>
              <p class="text">
                Nuxt.js Typescript ESLint を利用した<br />
                ボイラープレートです。
              </p>
            </a>
          </div>
        </Scrollin>
      </div>
    </div>
    <div class="box">
      <div class="box_item">
        <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
          <div class="card">
            <a href="https://demo.isystk.com/kaiji/" target="_blank">
              <div class="photo zoom">
                <img src="/img/kaiji.gif" />
              </div>
              <p class="title">ざわざわスクリプト</p>
              <p class="text">
                XSSの脆弱性があると「ざわざわ」して最後に何かが起こります。
              </p>
            </a>
          </div>
        </Scrollin>
      </div>
      <div class="box_item">
        <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
          <div class="card">
            <a href="#" target="_blank">
              <div class="photo zoom">
                <img src="/img/portfolio.jpg" />
              </div>
              <p class="title">このポートフォリオサイトです。</p>
              <p class="text">
                Nuxt.js + TypeScript を利用して作成しています。
              </p>
            </a>
          </div>
        </Scrollin>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Scrollin from "@/components/parts/Scrollin.vue";

@Component({
  components: {
    Scrollin
  }
})
export default class Works extends Vue {
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
}
</script>
