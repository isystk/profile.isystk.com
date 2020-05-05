<template>
  <div class="wrapper">
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
    <Header />
    <div class="mv">
      <div class="intro">
        <div>
          <Scrollin>
            <p class="title ">
              ITエンジニアを活きる
            </p>
          </Scrollin>
          <br />
          <Scrollin :class-object="'scrollin-delay1'">
            <p class="name">
              Yoshitaka Ise
            </p>
          </Scrollin>
        </div>
      </div>
      <Scrollin :class-object="'scrollin-delay2'">
        <div class="link">
          <a href="#" class="js-link" data-target="#introduction">
            SCROLL<br />
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </a>
        </div>
      </Scrollin>
    </div>
    <div class="contents">
      <nuxt />
    </div>
    <Scrollin>
      <div class="thanks">
        <div class="message">
          <p class="title">
            Thanks you
          </p>
          <ul class="sns-buttons">
            <li class="share-twitter">
              <a
                href="http://twitter.com/intent/tweet?text=Isystk's Portfolio%20http://profile.isystk.com/"
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
                href="http://line.me/R/msg/text/?Isystk's Portfolio%0D%0Ahttp://profile.isystk.com/"
              >
                LINE
              </a>
            </li>
            <!--
          <li class="share-google">
          <a href="https://plus.google.com/share?url=http://profile.isystk.com/" target="_blank">Google+</a>
          </li>
          <li class="share-hatena">
          <a href="http://b.hatena.ne.jp/add?mode=confirm&url=http://profile.isystk.com/&title=Isystk's Portfolio" target="_blank">はてブ</a>
          </li>
          <li class="share-pocket">
          <a href="http://getpocket.com/edit?url=http://profile.isystk.com/" target="_blank">Pocket</a>
          </li>
          --></ul>
        </div>
      </div>
    </Scrollin>
    <Footer />
    <PageTop />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import Header from "@/components/Header.vue";
import SideMenu from "@/components/SideMenu.vue";
import Footer from "@/components/Footer.vue";
import Scrollin from "@/components/parts/Scrollin.vue";
import PageTop from "@/components/parts/PageTop.vue";

@Component({
  components: {
    Header,
    SideMenu,
    Footer,
    Scrollin,
    PageTop
  }
})
export default class DefaultLayout extends Vue {}
</script>
