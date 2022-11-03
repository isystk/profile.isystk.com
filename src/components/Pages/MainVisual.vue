<template lang="pug">
div
  .vide-wrap
    video(muted='' playsinline='' loop='' autoplay='' preload='metadata')
      source(data-src='/video/mv.mp4' type='video/mp4' src='/video/mv.mp4')
      source(data-src='/video/mv.webm' type='video/webm' src='/video/mv.webm')
  .mv
    .intro
      div
        elements-scrollin(class-default='fadein' class-change='scrollin')
          p.title ITエンジニアを活きる
        elements-scrollin(class-default='fadein' class-change='scrollin scrollin-delay1')
          p.name Yoshitaka Ise
    elements-scrollin(class-default='fadein' class-change='scrollin scrollin-delay2')
      .link.text-center
        a(href='#' @click.prevent='linkToIntroduction')
          | SCROLL
          br
          v-icon(icon='mdi-chevron-down')
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
/* バックグラウンド 動画*/
.vide-wrap {
}
.vide-wrap video {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: initial;
  min-height: 100%;
  height: 100%;
  z-index: -100;
  background-color: #333;
  opacity: 0.8;
}
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
