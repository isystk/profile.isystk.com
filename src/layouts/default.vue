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
          <p class="title fadein">
            ITエンジニアを活きる
          </p>
          <br />
          <p class="name fadein scrollin-delay1">
            Yoshitaka Ise
          </p>
        </div>
      </div>
      <div class="link fadein scrollin-delay2">
        <a href="#" class="js-link" data-target="#introduction">
          SCROLL<br />
          <i class="fas fa-angle-down"></i>
        </a>
      </div>
    </div>
    <div class="contents">
      <nuxt />
    </div>
    <div class="thanks">
      <div class="message">
        <p class="title fadein">
          Thanks you
        </p>
      </div>
      <div class="sns-buttons">
        <ul>
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
          -->
        </ul>
      </div>
    </div>
    <Footer />
    <span id="page-top" class="link hide">
      <a href="#">
        <font-awesome-icon :icon="['fas', 'chevron-up']" />
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

import Header from "@/components/Header.vue";
import SideMenu from "@/components/SideMenu.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    SideMenu,
    Footer
  }
})
export default class DefaultLayout extends Vue {}
</script>
