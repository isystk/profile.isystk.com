<template>
  <article id="introduction">
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <h2>INTRODUCTION</h2>
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
          <span
            v-html="
              $sanitize(formatter.replaceLineFeedCodeToBR(profileData.message))
            "
          >
          </span>
        </Scrollin>
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Scrollin from '@/components/parts/Scrollin.vue'
import { portfolioModule, Profile } from '@/store/portfolio'
import { formatter } from '@/utilities'

@Component({
  components: {
    Scrollin,
  },
})
export default class Introduction extends Vue {
  // スクロール位置
  scroll = 0
  // 表示画面の高さ
  windowHeight = 0

  mounted(): void {
    window.addEventListener('load', this.onScroll)
    window.addEventListener('scroll', this.onScroll)
  }

  beforeDestroy(): void {
    window.removeEventListener('load', this.onScroll)
    window.removeEventListener('scroll', this.onScroll)
  }

  /** フォーマッタ ユーティリティ */
  public formatter = formatter

  // 画面スクロール時の処理
  onScroll(): void {
    if (!process.browser) {
      return
    }
    this.scroll = window.pageYOffset || document.documentElement.scrollTop
    this.windowHeight = window.innerHeight
  }

  // 要素が画面内に表示されているかどうか
  isScreenin(): boolean {
    if (!process.browser) {
      return false
    }
    const el = this.$el as HTMLElement
    if (
      this.scroll >
      el.offsetTop - this.windowHeight + this.windowHeight / 3
    ) {
      return true
    }
    return false
  }

  // 自己紹介データ
  get profileData(): Profile {
    return portfolioModule.profile
  }
}
</script>

<style lang="scss" scoped>
/* 5-1 自己紹介 */

#introduction .text {
  font-size: 16px;
  line-height: 1.5;
  padding: 10px;
  text-align: left;
}
#introduction .avatar img {
  border-radius: 50%;
  width: 50%;
}

@media screen and (min-width: 992px) {
  #introduction .box {
    flex-direction: row-reverse;
  }
  #introduction .text {
    font-size: 18px;
  }
}
</style>
