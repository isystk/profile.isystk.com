<template>
  <v-card id="skills" ref="componentRef">
    <v-container fluid class="container">
      <elements-scrollin class-default="fadein" class-change="scrollin">
        <h2 class="text-center">SKILLS</h2>
      </elements-scrollin>
      <hr :class="{ centerToSide: isScreenin() }" />
      <div v-for="(e, index) in skillData" :key="index">
        <elements-scrollin class-default="fadein" class-change="scrollin">
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
                <template v-for="() in e2.rating"> ★ </template>
                <template v-for="() in 3 - e2.rating"> ☆ </template>
              </div>
            </div>
          </div>
        </elements-scrollin>
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

// スキルデータ
const skillData = [
  {
    title: 'フロントエンド',
    color: 'yellow',
    rating: 3,
    text: 'フロントエンドは技術の進化が早くて学習することが多いですが、javascriptは一番好きな言語です。ブラウザとエディタだけあれば開発ができる手軽なところと、サーバーサイドや最近ではスマートフォン向けアプリの開発まで出来てしまうプラットフォームの多さに魅力的に感じます。直近ではNext.js・TypeScript・WebRTCを使用したP2Pビデオチャットアプリケーション開発を学んでおります。',
    items: [
      {
        name: 'React.js',
        rating: 3,
        noDivider: false,
        text: 'クラスコンポーネント・関数コンポーネントのどちらの書き方にも対応可能です。Typescript・MatelialUI も導入していました。また、Redux-Toolkitを利用した状態管理も対応可能です。',
      },
      {
        name: 'Vue.js',
        rating: 2,
        noDivider: false,
        text: '新規でSPAを構築したり、既存のWebアプリに組み込んだりするときに主に使っています。\n簡単かつ柔軟で使いやすく開発で利用するケースも増えています。Nuxt.jsを利用してからは、ディレクトリ構造など規約がしっかりと決まっていて判りやすくなった印象です。',
      },
      {
        name: 'Typescript',
        rating: 2,
        noDivider: false,
        text: 'TypeScriptの型システムにより未然にエラーや凡ミスを防げることも魅力的に感じます。このサイトもNuxt.js&TypeScript&Vuetifyで作成されています。',
      },
      {
        name: 'JQuery',
        rating: 3,
        noDivider: true,
        text: 'DOM操作はもちろんおしゃれなUIを実現するためのプラグイン作成まで対応可能です。クライアントのこだわりの強い難しい要望にも対応可能です。',
      },
      {
        name: 'Node.js',
        rating: 2,
        noDivider: false,
        text: '最近は主にCLIツールとして使用しています。以前は、ソーシャルゲーム開発やExpressを利用したWebアプリケーションを作成していた経験もあります。',
      },
      {
        name: 'AMP・PWA',
        rating: 2,
        noDivider: false,
        text: 'SEO対策の一貫でランディングページをAMP化しました。表示が早くなりGoogleからの評価も高くなりました。またPWAではServiceWorkerを作成するなどして負荷改善にも繋がりました。',
      },
    ],
  },
  {
    title: 'Java',
    color: 'red',
    rating: 3,
    text: 'Javaを利用した開発に携わることがもっとも多かったので、開発はもちろんですがフレームワークの選定から基盤構築までアーキテクチャ全体を対応する事が可能です。',
    items: [
      {
        name: 'Spring Boot',
        rating: 3,
        noDivider: true,
        text: 'Springフレームワーク自体はDI機能が流行りだした2006年頃から利用していました。当時はXMLの記述が複雑で苦労しましたが、進化を遂げて使いやすくなり今でも開発で利用する機会が多いです。',
      },
      {
        name: 'SAStruts',
        rating: 3,
        noDivider: false,
        text: '2010年頃から5年ほど複数の開発で利用していました。サポートが終了して以降はあまり利用していません。',
      },
      {
        name: 'Apache Struts',
        rating: 3,
        noDivider: false,
        text: '2010年頃まではもっとも利用していました。Struts2も利用していましたが脆弱性の問題が発生した2017年以降はあまり利用しなくなりました。',
      },
      {
        name: 'Apache Wicket',
        rating: 2,
        noDivider: false,
        text: 'SNSの開発で1年ほど利用していました。軽量でUIに特化したフレームワークで開発しやすい印象でした。',
      },
    ],
  },
  {
    title: 'PHP',
    color: 'blue',
    rating: 2,
    text: 'PHPを利用した開発経験は少ないのですが、Laravelの洗練された開発効率の良いフレームワークに魅了されて以降、PHPの虜となりました。現在は、Laravelを利用したWebアプリケーション開発のプロジェクトに従事しています。',
    items: [
      {
        name: 'Laravel',
        rating: 3,
        noDivider: true,
        text: 'Webアプリケーション開発においてよく利用される機能が少ないコードで簡単に利用できるLaravelの開発効率の高さが素晴らしいと感じます。',
      },
    ],
  },
  {
    title: 'DB',
    color: 'lime',
    rating: 3,
    text: 'SQLの作成はもちろんですが、データベースのチューニングやレプリケーション構築などの経験もあります。',
    items: [
      {
        name: 'MySQL',
        rating: 3,
        noDivider: false,
        text: '業務で8年ほど利用していました。データベースのチューニングやレプリケーションなどの経験もあります。',
      },
      {
        name: 'Oracle',
        rating: 2,
        noDivider: true,
        text: '業務で6年ほど利用していました。OracleMasterの資格もあります。',
      },
      {
        name: 'MongoDB',
        rating: 2,
        noDivider: false,
        text: 'Node.jsを利用したWebアプリケーション開発で利用していました。JSONをそのままの形で KeyValueストア出来る使いやすさが印象的でした。',
      },
    ],
  },
  {
    title: 'インフラ',
    color: 'brown',
    rating: 2,
    text: '元々サーバーサイドのエンジニアだったのでインフラに関わることが多く、ApacheやTomcatの構築なども対応可能です。最近では、ECR(AWS)やDocker の構築も対応しております。',
    items: [
      {
        name: 'AWS',
        rating: 2,
        noDivider: true,
        text: 'EC2、RDS、Lambda、API Gateway、ECR など3年ほど業務で利用していました。',
      },
      {
        name: 'Firebase',
        rating: 1,
        noDivider: false,
        text: 'FCMを利用したプッシュ通知機能を利用する際に学習しました。',
      },
      {
        name: 'Jenkins',
        rating: 3,
        noDivider: false,
        text: '継続的に自動でデプロイする仕組みとして10年ほど業務で利用していました。',
      },
      {
        name: 'Zabbix',
        rating: 2,
        noDivider: false,
        text: 'サイトの死活監視に利用していました。',
      },
    ],
  },
  {
    title: '検索エンジン',
    color: 'purple',
    rating: 3,
    text: 'ニュースサイトのようなコンシューマー向けの検索結果画面に利用していました。',
    items: [
      {
        name: 'Solr',
        rating: 3,
        noDivider: true,
        text: 'スキーマの設計からインデックスを生成するためのバッチ作成・インデックスを利用した検索・取得処理など3年ほど経験があります。機能が豊富で実績も沢山ある検索エンジンなので多くの開発で利用していました。',
      },
      {
        name: 'Elasticsearch',
        rating: 1,
        noDivider: false,
        text: 'クラスタの構築が簡単だった事とUIが使いやすい印象でした。1年ほど業務で利用していました。',
      },
    ],
  },
  {
    title: '保有資格',
    color: 'grey',
    rating: 3,
    text: 'IT系の資格は以下になります。その他、保有する資格としては、ビジネス能力検定、航空特殊無線技士、牽引自動車、大型特殊自動車、フォークリフト、車両系建設機械、高所作業車、危険物乙4、第二級陸上特殊無線技士、国際航空貨物取扱士、航空危険物取扱士、ガス溶接、アーク溶接、床上操作式クレーン などがあります。',
    items: [
      {
        name: 'ORACLE MASTER Silver Oracle9i Database(OCA)',
        rating: 3,
        noDivider: true,
        text: '入社して間もない頃にデータベースの学習の為に取得しました。SQLの記述やデータベースの仕組みについてこの時に学んだ内容は今でも生きていると思います。',
      },
      {
        name: 'Sun Certified Programmer for the Java 2 Platform 1.4',
        rating: 3,
        noDivider: false,
        text: 'Javaを利用した業務に携わることが多く実務経験は豊富でしたが、改めて基礎から学習してみたいと思いこの資格を取得しました。',
      },
      {
        name: 'Linux Professional Institute Certification Level1',
        rating: 3,
        noDivider: false,
        text: 'シェルコマンドやLinuxサーバのアーキテクチャを学びました。この時に覚えたコマンドや知識が今でも業務で役立っていて、もっとも実務に活かせている資格です。',
      },
    ],
  },
]
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
