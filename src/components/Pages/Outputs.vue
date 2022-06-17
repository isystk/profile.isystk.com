<template>
  <v-card id="works">
    <v-container fluid class="container">
      <elements-scrollin class-default="fadein" class-change="scrollin">
        <h2 class="text-center">OUTPUT</h2>
      </elements-scrollin>
      <elements-hr />
      <div v-if="workBlogData" class="box">
        <div class="box_item">
          <elements-scrollin class-default="fadein" class-change="scrollin">
            <div class="mockup">
              <img src="/img/imac.png" class="mac" />
              <div class="site">
                <a href="https://blog.isystk.com/" target="_blank">
                  <img :src="workBlogData.imageUrl" width="100%" />
                </a>
              </div>
            </div>
          </elements-scrollin>
        </div>
        <div class="box_item">
          <div class="mockup-description">
            <elements-scrollin class-default="fadein" class-change="scrollin">
              <div class="number">
                <div class="line"></div>
                <div class="label">01</div>
              </div>
            </elements-scrollin>
            <elements-scrollin
              class-default="fadein"
              class-change="scrollin"
            >
              <a href="https://blog.isystk.com/" target="_blank">
                <p class="title">
                  <span v-html="workBlogData.title"> </span>
                </p>
                <p class="text">
                  <span v-html="workBlogData.text"> </span>
                </p>
              </a>
            </elements-scrollin>
          </div>
        </div>
      </div>
      <v-row dense>
        <v-col
          cols="12"
          md="6"
          v-for="(e, index) in workOtherData"
          :key="index"
        >
          <elements-scrollin class-default="fadein" class-change="scrollin">
            <div class="card">
              <a :href="e.url" target="_blank">
                <div class="photo zoom">
                  <img :src="e.imageUrl" />
                </div>
                <p class="title">
                  <span v-html="e.title"> </span>
                </p>
                <p class="text">
                  <span v-html="e.text"> </span>
                </p>
              </a>
            </div>
          </elements-scrollin>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { injectStore } from '@/store'
import MainService from '@/services/main'
import * as _ from 'lodash'
const main = injectStore<MainService>()

// 作品データ(ブログ)
const workBlogData = computed(() => {
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
