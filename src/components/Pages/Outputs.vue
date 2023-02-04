<template lang="pug">
v-card#works
  v-container.container(fluid='')
    elements-scrollin(class-default='fadein' class-change='scrollin')
      h2.text-center OUTPUT
    elements-hr
    .box(v-if='workYoutubeData')
      .box_item
        elements-scrollin(class-default='fadein' class-change='scrollin')
          .mockup
            img.mac(src='/img/imac.png')
            .site
              a(:href='workYoutubeData.url' target='_blank')
                img(:src='workYoutubeData.imageUrl' width='100%')
      .box_item
        .mockup-description
          elements-scrollin(class-default='fadein' class-change='scrollin')
            .number
              .line
              .label 01
          elements-scrollin(class-default='fadein' class-change='scrollin')
            a(:href='workYoutubeData.url' target='_blank')
              p.title
                span(v-html='workYoutubeData.title')
              p.text
                span(v-html='workYoutubeData.text')
    v-row(dense='')
      v-col(cols='12' md='6' v-for='(e, index) in workOtherData' :key='index')
        elements-scrollin(class-default='fadein' class-change='scrollin')
          .card
            a(:href='e.url' target='_blank')
              .photo.zoom
                img(:src='e.imageUrl')
              p.title
                span(v-html='e.title')
              p.text
                span(v-html='e.text')
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { injectStore } from '@/store'
import MainService from '@/services/main'
import * as _ from 'lodash'
const main = injectStore<MainService>()

// 作品データ(Youtube)
const workYoutubeData = computed(() => {
  return _.slice(main?.output?.data, 0, 1)[0]
})

// 作品データ(その他)
const workOtherData = computed(() => {
  if (_.size(main?.output?.data) === 0) {
    return []
  }
  return _.slice(main?.output?.data, 1)
})
</script>

<style lang="scss" scoped>
/* マウスオーバーで画像をズームするアニメーション */
.zoom {
  overflow: hidden;
}
.zoom img:hover {
  animation: imgZoom 0.5s ease 0s 1 forwards;
}
@keyframes imgZoom {
  0% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1.1, 1.1);
  }
}

#works {
}
#works .mockup {
  position: relative;
}
#works .mockup .site {
  position: absolute;
  left: 0;
  top: 25px;
}
#works .mockup img.mac {
  width: 100%;
}
#works .mockup .site img {
  width: 85%;
  margin: 10px auto auto;
}

#works .mockup-description {
  position: relative;
}

#works .mockup-description .number .label {
  display: none;
}

#works .box_item {
  margin: 30px 0;
  width: 100%;
}

#works .photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
#works .title {
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 8px;
}
#works .text {
  line-height: 1.5;
}
#works .card {
  margin-bottom: 15px;
}

@media screen and (min-width: 992px) {
  #works .box {
    display: flex;
    justify-content: space-between;
  }

  #works .mockup .site img {
    width: 90%;
    margin: 20px auto auto;
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
  #works .title {
    font-size: 22px;
  }
  #works .photo {
    height: 350px;
  }
  #works .card {
    margin-bottom: 30px;
  }
}
</style>
