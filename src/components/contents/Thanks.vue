<template>
  <div>
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <div class="thanks">
        <div class="message">
          <p class="title">Thanks you</p>
          <ul class="sns-buttons">
            <li class="share-twitter">
              <a
                href="http://twitter.com/intent/tweet?text=Typescript＆Nuxt.jsで最近のフロントエンドの技術を取り入れて作成したポートフォリオ。Isystk's Portfolio%20http://profile.isystk.com/"
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
                href="http://line.me/R/msg/text/?Typescript＆Nuxt.jsで最近のフロントエンドの技術を取り入れて作成したポートフォリオ。Isystk's Portfolio%0D%0Ahttp://profile.isystk.com/"
              >
                LINE
              </a>
            </li>
            <!--
              <li class="share-google">
              <a href="https://plus.google.com/share?url=http://profile.isystk.com/" target="_blank">Google+</a>
              </li>
              <li class="share-hatena">
              <a href="http://b.hatena.ne.jp/add?mode=confirm&url=http://profile.isystk.com/&title=Typescript＆Nuxt.jsで最近のフロントエンドの技術を取り入れて作成したポートフォリオ。Isystk's Portfolio" target="_blank">はてブ</a>
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
    Scrollin,
  },
})
export default class Thanks extends Vue {}
</script>

<style lang="scss" scoped>
/*--------------------------------------------------------------------

  6 Thanks 

--------------------------------------------------------------------*/

.thanks {
  height: calc(100vh - 60px);
  position: relative;
}
.thanks .message {
  color: #fff;
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  z-index: 1;
  text-align: right;
}
.thanks .message .title {
  text-align: right;
  font-size: 54px;
  line-height: 1;
  letter-spacing: 2px;
  margin-bottom: 30px;
}
.thanks .sns-buttons {
  position: absolute;
  top: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
}
.thanks .sns-buttons li {
  font-size: 16px;
  float: left;
  text-align: center;
  width: 84px;
  margin-right: 1%;
  border-radius: 3px;
  list-style: none;
  line-height: 20px;
}
.thanks .sns-buttons li.share-twitter {
  background: #55acee;
  box-shadow: 0 2px #2795e9;
}
.thanks .sns-buttons li.share-twitter:hover {
  background: #83c3f3;
}
.thanks .sns-buttons li.share-facebook {
  background: #3b5998;
  box-shadow: 0 2px #2d4373;
}
.thanks .sns-buttons li.share-facebook:hover {
  background: #4c70ba;
}
.thanks .sns-buttons li.share-google {
  background: #dd4b39;
  box-shadow: 0 2px #c23321;
}
.thanks .sns-buttons li.share-google:hover {
  background: #e47365;
}
.thanks .sns-buttons li.share-hatena {
  background: #2c6ebd;
  box-shadow: 0 2px #225694;
}
.thanks .sns-buttons li.share-hatena:hover {
  background: #4888d4;
}
.thanks .sns-buttons li.share-pocket {
  background: #f13d53;
  box-shadow: 0 2px #e6152f;
}
.thanks .sns-buttons li.share-pocket:hover {
  background: #f26f7f;
}
.thanks .sns-buttons li.share-line {
  background: #00c300;
  box-shadow: 0 2px #009d00;
}
.thanks .sns-buttons li.share-line:hover {
  background: #2bd92b;
}
.thanks .sns-buttons a {
  display: block;
  height: 27px;
  padding-top: 6px;
  color: #ffffff;
  text-decoration: none;
}
.thanks .sns-buttons a:hover {
  text-decoration: none;
  color: #ffffff;
}

@media screen and (min-width: 992px) {
  .thanks .intro {
    width: 75%;
  }
}
</style>
