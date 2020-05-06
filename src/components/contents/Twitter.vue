<template>
  <article id="twitter">
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <h2>
        Twitter
      </h2>
    </Scrollin>
    <hr :class="{ centerToSide: isScreenin() }" />
    <div class="box">
      <div class="box_item">
        <p class="title">
          フォロワー数
        </p>
        <div class="followers js-shuffleNum">
          {{ twitterFollower }}
        </div>
      </div>
      <div class="box_item">
        <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
          <div v-if="isShowTwitter" class="tweet" style="height: 400px;">
            <a
              class="twitter-timeline"
              data-height="400"
              data-dnt="true"
              data-chrome="noheader,nofooter"
              href="https://twitter.com/ise0615?ref_src=twsrc%5Etfw"
            >
              Tweets by ise0615
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </Scrollin>
      </div>
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
export default class Twitter extends Vue {
  // スクロール位置
  scroll = 0;
  // 表示画面の高さ
  windowHeight = 0;

  // Twitter表示が完了済みかどうか
  isShowTwitter = false;

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

    // 数字のランダム表示
    const twitter = document.getElementById("twitter") as HTMLInputElement;
    if (
      this.scroll >
      twitter.offsetTop - this.windowHeight + this.windowHeight / 3
    ) {
      if (!this.isShowTwitter) {
        const shuffleNum = document.querySelector(
          ".js-shuffleNum"
        ) as HTMLInputElement;
        const defautVal = shuffleNum.textContent;
        let count = 0;
        let id = 0;
        const setRandom = function(): void {
          const random = Math.floor(Math.random() * 9999);
          shuffleNum.textContent = random + "";
          count++;
          if (count > 50) {
            clearInterval(id);
            shuffleNum.textContent = defautVal;
          }
        };
        id = window.setInterval(setRandom, 20);

        this.isShowTwitter = true;
      }
    }
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
  
  // ツイッターフォロワー数
  get twitterFollower(): number{
    if (!portfolioModule.profile.twitter_follower) {
      return 0;
    }
    return portfolioModule.profile.twitter_follower;
  }
}
</script>

<style lang="scss" scoped>
/* 5-5 Twitter */

#twitter {
}

#twitter .title {
  font-size: 20px;
  margin-bottom: 30px;
}
#twitter .followers {
  font-size: 80px;
}

iframe.twitter-timeline-rendered {
  width: 100% !important;
  margin:0 auto;
}
.timeline-Widget {
  background-color: #fff;
  border-radius: 5px;
  width: 100% !important;
}

@media screen and (min-width: 992px) {
}
</style>
