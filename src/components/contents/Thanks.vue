<template>
  <div>
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <div class="thanks">
        <div class="message">
          <p class="title">
            Thanks you
          </p>
          <ul class="sns-buttons">
            <li class="share-twitter">
              <a
                href="http://twitter.com/intent/tweet?text=Typescript&amp;Nuxt.jsで最近のフロントエンドの技術を取り入れて作成したポートフォリオ。Isystk&#039;s Portfolio%20http://profile.isystk.com/"
                target="_blank"
              >
                Twitter
              </a>
            </li>
            <li class="share-facebook">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=http://profile.isystk.com/"
                target="_blank"
              >
                Facebook
              </a>
            </li>
            <li class="share-line">
              <a
                href="http://line.me/R/msg/text/?Typescript&amp;Nuxt.jsで最近のフロントエンドの技術を取り入れて作成したポートフォリオ。Isystk&#039;s Portfolio%0D%0Ahttp://profile.isystk.com/"
              >
                LINE
              </a>
            </li>
            <!--
              <li class="share-google">
              <a href="https://plus.google.com/share?url=http://profile.isystk.com/" target="_blank">Google+</a>
              </li>
              <li class="share-hatena">
              <a href="http://b.hatena.ne.jp/add?mode=confirm&url=http://profile.isystk.com/&title=Typescript&amp;Nuxt.jsで最近のフロントエンドの技術を取り入れて作成したポートフォリオ。Isystk&#039;s Portfolio" target="_blank">はてブ</a>
              </li>
              <li class="share-pocket">
              <a href="http://getpocket.com/edit?url=http://profile.isystk.com/" target="_blank">Pocket</a>
              </li>
            -->
          </ul>
        </div>
      </div>
    </Scrollin>
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
export default class Thanks extends Vue {}
</script>
