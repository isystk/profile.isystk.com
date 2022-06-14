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
          <elements-scrollin class-default="fadein" class-change="scrollin">
            <p class="title">ITエンジニアを活きる</p>
          </elements-scrollin>
          <elements-scrollin
            class-default="fadein"
            class-change="scrollin scrollin-delay1"
          >
            <p class="name">Yoshitaka Ise</p>
          </elements-scrollin>
        </div>
      </div>
      <elements-scrollin
        class-default="fadein"
        class-change="scrollin scrollin-delay2"
      >
        <div class="link text-center">
          <a href="#" @click.prevent="linkToIntroduction">
            SCROLL<br />
            <v-icon icon="mdi-chevron-down" />
          </a>
        </div>
      </elements-scrollin>
    </div>
  </div>
</template>

<script lang="ts" setup>
// メインビジュアルのスクロールリンク
const linkToIntroduction = () => {
  const introduction = document.getElementById('introduction') as HTMLElement
  window.scrollTo({
    top: introduction.offsetTop,
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped>
.mv {
  height: calc(100vh - 60px);
}
.mv .intro {
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  margin: auto;
}
.mv .intro .title {
  text-align: right;
  font-size: 45px;
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
    width: 46%;
    height: 75%;
  }
  .mv .intro .title {
    font-size: 60px;
    margin-bottom: 60px;
  }
  .mv .intro .name {
    font-size: 40px;
  }
}
</style>
