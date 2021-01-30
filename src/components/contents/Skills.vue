<template>
  <article id="skills">
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <h2>
        SKILLS
      </h2>
    </Scrollin>
    <hr :class="{ centerToSide: isScreenin() }" />
    <template v-for="(e, index) in skillData">
      <Scrollin
        :key="index"
        :class-default="'fadein'"
        :class-change="'scrollin'"
      >
        <div class="skill">
          <div class="skill-header">
            {{ e.title }}
          </div>
          <div class="skill-caption">
            {{ e.text }}
          </div>
          <div
            v-for="(e2, index2) in e.items"
            :key="e.title + index2"
            class="skill-item"
          >
            <div class="text">
              <p>{{ e2.name }}</p>
              {{ e2.text }}
            </div>
            <div class="rating">
              <template v-for="(e3, index3) in e2.rating">
                ★
              </template>
              <template v-for="(e3, index3) in 3 - e2.rating">
                ☆
              </template>
            </div>
          </div>
        </div>
      </Scrollin>
    </template>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Scrollin from "@/components/parts/Scrollin.vue";
import { portfolioModule, Skill } from "@/store/portfolio";
import { formatter } from "@/utilities";

@Component({
  components: {
    Scrollin
  }
})
export default class Skills extends Vue {
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

  // スキルデータ
  get skillData(): Skill[] | null {
    if (portfolioModule.skill.length <= 0) {
      return null;
    }
    return portfolioModule.skill;
  }
}
</script>

<style lang="scss" scoped>
/* 5-3 スキル */

#skills .skill {
  border: solid 1px #000;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 30px;
}
.skill-header {
  background-color: #000d6d;
  color: #fff;
  text-align: left;
  height: 24px;
  font-size: 24px;
  padding: 10px 0 10px 10px;
  border-radius: 8px 8px 0 0;
}
.skill-caption,
.skill-item {
  font-size: 16px;
  line-height: 1.3;
  text-align: left;
  padding: 10px;
  border-top: solid 1px #000;
}
.skill-item p {
  font-size: 20px;
  margin: 10px 0;
}
.skill-item .text {
  display: inline-block;
  width: 70%;
  line-height: 1.2;
}
.skill-item .rating {
  margin: 8px;
  float: right;
  font-size: 14px;
  letter-spacing: 5px;
  color: #fff000;
}

@media screen and (min-width: 992px) {
  .skill-header {
    height: 30px;
    font-size: 28px;
    padding: 8px 0 8px 10px;
  }
  .skill-item .text {
    width: 80%;
  }
  .skill-item .rating {
    font-size: 30px;
  }
}
</style>
