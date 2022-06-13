<template>
  <v-card id="works" ref="componentRef">
    <v-container fluid class="container">
      <elements-scrollin class-default="fadein" class-change="scrollin">
        <h2 class="text-center">WORKS</h2>
      </elements-scrollin>
      <hr :class="{ centerToSide: isScreenin() }" />
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
              class-change="scrollin scrollin-delay1"
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
      <div v-for="(e, index) in workOtherData" :key="index">
        <div class="box">
          <div class="box_item">
            <elements-scrollin class-default="fadein" class-change="scrollin">
              <div class="card">
                <a :href="e[0].url" target="_blank">
                  <div class="photo zoom">
                    <img :src="e[0].imageUrl" />
                  </div>
                  <p class="title">
                    <span v-html="e[0].title"> </span>
                  </p>
                  <p class="text">
                    <span v-html="e[0].text"> </span>
                  </p>
                </a>
              </div>
            </elements-scrollin>
          </div>
          <div class="box_item">
            <elements-scrollin class-default="fadein" class-change="scrollin">
              <div class="card">
                <a :href="e[1].url" target="_blank">
                  <div class="photo zoom">
                    <img :src="e[1].imageUrl" />
                  </div>
                  <p class="title">
                    <span v-html="e[1].title"> </span>
                  </p>
                  <p class="text">
                    <span v-html="e[1].text"> </span>
                  </p>
                </a>
              </div>
            </elements-scrollin>
          </div>
        </div>
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
} from 'vue'

type State = {
  scroll: number
  windowHeight: number
  isInScreen: boolean
}

const state = reactive<State>({
  scroll: 0,
  windowHeight: 0,
  isInScreen: false,
})

onBeforeMount((): void => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount((): void => {
  window.removeEventListener('scroll', onScroll)
})

// 画面スクロール時の処理
const onScroll = (): void => {
  state.scroll = window.pageYOffset || document.documentElement.scrollTop
  state.windowHeight = window.innerHeight
}

// 要素が画面内に表示されているかどうか
const isScreenin = (): boolean => {
  if (
    state.scroll >
    getPosition() - state.windowHeight + state.windowHeight / 3
  ) {
    return true
  }
  return false
}

const componentRef = ref<HTMLElement | null>(null)
const getPosition = (): number => {
  const el = componentRef.value
  if (el) {
    return el.offsetTop
    // return el.getBoundingClientRect().top
  } else {
    return 0
  }
}

const portfolioModule = [
  {
    title: "isystk's blog",
    text: '私が運営しているブログです。\n主にITエンジニアとして学んだ事を掲載しています。',
    url: 'https://blog.isystk.com/',
    imageUrl: '/img/blog-site.jpg',
  },
  {
    title: 'Laravel＆React.js Boilerplate',
    text: 'Laravel＆React.jsで作成した簡易的なECサイトのアプリケーションです。フロント画面で購入した商品を管理画面の注文履歴で閲覧したり、在庫の管理を行うことが出来ます。',
    url: 'https://blog.isystk.com/web_production/boilerplate/1472/',
    imageUrl: '/img/laravel-react-boilerplate.jpg',
  },
  {
    title: 'Java Springboot Boilerplate',
    text: '大規模プロジェクトでも利用できるようなSpringBootのボイラープレートを作成しました。フロント、管理画面、バッチ、検索エンジン、会員登録 などのよくある構成を最低限の機能に絞ってコンパクトに纏めています。',
    url: 'https://blog.isystk.com/system_develop/backend/springboot/722/',
    imageUrl: '/img/java-springboot-boilerplate.jpg',
  },
  {
    title: 'Nuxt.js JamStack Sample',
    text: 'MicroCMS と Nuxt.js を利用してJamStackなWebアプリケーションを作成しました。',
    url: 'https://blog.isystk.com/web_production/vue/1642/',
    imageUrl: '/img/nuxtjs-jamstack-sample.jpg',
  },
  {
    title: 'Next.js Typescript Firebase',
    text: 'Firebase を利用して Next.js でWebアプリケーションを作成ました。',
    url: 'https://blog.isystk.com/web_production/react/1659/',
    imageUrl: '/img/nextjs-typescript-firebase.jpg',
  },
  {
    title: 'Alexa Twitter Trends',
    text: 'AWS Lambda を利用して AlexaでTwitterのトレンドをお知らせするスキルを作成しました。',
    url: 'https://blog.isystk.com/web_production/alexa/1669/',
    imageUrl: '/img/alexa-twitter-trends.jpg',
  },
  {
    title: 'Nuxt3 Typescript AWS',
    text: 'Nuxt.js3 を利用してWebアプリケーションを作成しました。',
    url: 'https://blog.isystk.com/web_production/vue/1675/',
    imageUrl: '/img/nuxt3-typescript-aws.jpg',
  },
  {
    title: 'Next.js WebRTC Sample',
    text: 'Next.js で Web-RTC を利用したZoomのようなビデオ通話アプリを作成しました。',
    url: 'https://blog.isystk.com/web_production/react/1685/',
    imageUrl: '/img/nextjs-webrtc-sample.jpg',
  },
  {
    title: 'Next.js Nest.js GraphQL',
    text: 'Next.js & Nest.js & Prisma を利用してGraphQLを使ったアプリケーションを作成しました。',
    url: 'https://blog.isystk.com/web_production/react/1696/',
    imageUrl: '/img/nextjs-nestjs-graphql.jpg',
  },
  {
    title: 'Nuxt.js＆Typescript Boilerplate',
    text: 'Nuxt.js Typescript ESLint を利用したボイラープレートです。チャート表示や画像カルーセル、モーダル表示など利用頻度の高い機能をサンプルとして纏めています。',
    url: 'https://blog.isystk.com/web_production/boilerplate/1108/',
    imageUrl: '/img/nuxtjs-typescript-boilerplate.jpg',
  },
  {
    title: 'クロスサイト・スクリプティング(XSS)の検証サンプル − XSSカイジ',
    text: 'XSSの脆弱性を検証する為に作成したサンプルスクリプトです。Webサイト内にサニタイズ漏れがあると「ざわざわ」して最後に何かが起こります..。サンプルも公開しているので是非ご覧ください。',
    url: 'https://blog.isystk.com/web_production/xss/214/',
    imageUrl: '/img/kaiji.gif',
  },
  {
    title: '自作のWordpress用テンプレートです。',
    text: '私が運営しているブログで利用している自作のWordpress用テンプレートです。SEO対策に最適化しており格安で販売しておりますのでご興味のある方はどうぞ。',
    url: 'https://blog.isystk.com/web_production/wordpress/1085/',
    imageUrl: '/img/wordpress-template.jpg',
  },
  {
    title: 'このポートフォリオサイトです。',
    text: 'Vue.js(Nuxt.js)&Typescriptを利用してポートフォリオを作成しました。GithubにPushすると自動でCircleCIによってビルド・テストが実行されてVercelにデプロイされるようにしています。',
    url: 'https://blog.isystk.com/web_production/portfolio/829/',
    imageUrl: '/img/portfolio.jpg',
  },
]

type Work = {
  title: string
  text: string
  url: string
  imageUrl: string
}

// 作品データ(ブログ)
const workBlogData = computed(() => {
  if (portfolioModule.length <= 0) {
    return null
  }
  const blog = portfolioModule[0]
  return blog
})

// 作品データ(その他)
const workOtherData = computed(() => {
  if (portfolioModule.length <= 0) {
    return null
  }
  const other = [ ...portfolioModule ].splice(1)
  const data: any[] = []
  let count = -1
  for (let i = 0; i < other.length; i++) {
    if (i % 2 === 0) {
      count = count + 1
      data[count] = []
    }
    data[count].push(other[i])
  }
  return data
})
</script>

<style lang="scss" scoped>
#works {
  background-color: #fff;
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
}

#works .mockup-description {
  position: relative;
}

#works .mockup-description .number .label {
  display: none;
}

#works .photo {
  overflow: hidden;
}
#works .title {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.5;
}
#works .text {
  text-align: left;
  line-height: 1.5;
}

@media screen and (min-width: 992px) {
  #works .mockup .site img {
    width: 90%;
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

  #works .card {
    margin: 30px;
  }
}
</style>
