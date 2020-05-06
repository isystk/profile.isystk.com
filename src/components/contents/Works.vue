<template>
  <article id="works">
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <h2>
        WORKS
      </h2>
    </Scrollin>
    <hr :class="{ centerToSide: isScreenin() }" />
    <div v-if="workBlogData" class="box">
      <div class="box_item">
        <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
          <div class="mockup">
            <img src="/img/imac.png" width="100%" />
            <div class="site">
              <a href="https://blog.isystk.com/" target="_blank">
                <img :src="workBlogData.imageUrl" width="100%" />
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
                <span
                  v-html="
                    $sanitize(
                      formatter.replaceLineFeedCodeToBR(workBlogData.title)
                    )
                  "
                >
                </span>
              </p>
              <p class="text">
                <span
                  v-html="
                    $sanitize(
                      formatter.replaceLineFeedCodeToBR(workBlogData.text)
                    )
                  "
                >
                </span>
              </p>
            </a>
          </Scrollin>
        </div>
      </div>
    </div>
    <template v-for="(e, index) in workOtherData">
      <div :key="index" class="box">
        <div class="box_item">
          <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
            <div class="card">
              <a :href="e[0].url" target="_blank">
                <div class="photo zoom">
                  <img :src="e[0].imageUrl" />
                </div>
                <p class="title">
                  <span
                    v-html="
                      $sanitize(formatter.replaceLineFeedCodeToBR(e[0].title))
                    "
                  >
                  </span>
                </p>
                <p class="text">
                  <span
                    v-html="
                      $sanitize(formatter.replaceLineFeedCodeToBR(e[0].text))
                    "
                  >
                  </span>
                </p>
              </a>
            </div>
          </Scrollin>
        </div>
        <div class="box_item">
          <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
            <div class="card">
              <a :href="e[1].url" target="_blank">
                <div class="photo zoom">
                  <img :src="e[1].imageUrl" />
                </div>
                <p class="title">
                  <span
                    v-html="
                      $sanitize(formatter.replaceLineFeedCodeToBR(e[1].title))
                    "
                  >
                  </span>
                </p>
                <p class="text">
                  <span
                    v-html="
                      $sanitize(formatter.replaceLineFeedCodeToBR(e[1].text))
                    "
                  >
                  </span>
                </p>
              </a>
            </div>
          </Scrollin>
        </div>
      </div>
    </template>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Scrollin from "@/components/parts/Scrollin.vue";
import { portfolioModule, Work } from "@/store/portfolio";
import { formatter } from "@/utilities";

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

  /** フォーマッタ ユーティリティ */
  public formatter = formatter;

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
      el.offsetTop - this.windowHeight + this.windowHeight / 3
    ) {
      return true;
    }
    return false;
  }

  // 作品データ(ブログ)
  get workBlogData(): Work | null {
    if (portfolioModule.work.length <= 0) {
      return null;
    }
    const blog = portfolioModule.work[0];
    return blog;
  }

  // 作品データ(その他)
  get workOtherData(): Work[] | null {
    if (portfolioModule.work.length <= 0) {
      return null;
    }
    const other = portfolioModule.work.splice(1);
    const data: any[] = [];
    let count = -1;
    for (let i = 0; i < other.length; i++) {
      if (i % 2 === 0) {
        count = count + 1;
        data[count] = [];
      }
      data[count].push(other[i]);
    }
    return data;
  }
}
</script>

<style lang="scss" scoped>
/* 5-4 作品 */

#works {
  background-color: #fff;
}
#works .mockup {
  position: relative;
}
#works .mockup .site {
  position: absolute;
  left: 0;
  top: 25px;
}
#works .mockup .site img {
  width: 85%;
}

#works .mockup-description {
  position: relative;
}

#works .mockup-description .number .label {
  display: none;
}

#works .photo {
  overflow: hidden;
}
#works .title {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.5;
}
#works .text {
  text-align: left;
  line-height: 1.5;
}

@media screen and (min-width: 992px) {
  #works .mockup .site img {
    width: 90%;
  }

  #works .mockup-description .number {
    position: absolute;
    top: 60px;
  }

  #works .mockup-description .number .line {
    border: solid 1px #000;
    width: 100px;
  }

  #works .mockup-description .number .label {
    display: block;
    position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    border: solid 1px #000;
    font-weight: 700;
    letter-spacing: 2px;
    left: 101px;
    top: -20px;
    background-color: #000d6d;
    color: #fff;
  }

  #works .mockup-description .title {
    position: absolute;
    top: 100px;
    left: 101px;
  }
  #works .mockup-description .text {
    position: absolute;
    top: 160px;
    left: 101px;
  }

  #works .card {
    margin: 30px;
  }
}
</style>
