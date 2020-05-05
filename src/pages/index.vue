<template>
  <div>
    <article id="introduction" class="bg">
      <h2 class="fadein">
        INTRODUCTION
      </h2>
      <hr />
      <div class="box">
        <div class="box_item avatar fadein">
          <img src="/img/avatar.jpg" />
        </div>
        <p class="box_item text fadein">
          はじめまして。伊勢と申します。<br />
          Webを中心にシステムエンジニアとして15年ほど業務しています。<br />
          新卒では中小企業のSIerに入社しました。常駐先で基本設計から開発/テストまでウォーターフォール型のシステム開発を学び、Javaを中心に証券会社や保険会社などの基幹システム開発に携わりました。<br />
          5年努めたのちSOHOとして独立、独立後はNode.jsやReact.jsを中心としたソーシャルゲーム開発やB2Cサイト開発などに携わることが多くフロントエンドを学びました。現在は、NuxtjsやTypescriptを中心にフルスタックエンジニアとして業務しております。<br />
          (2020年4月更新)
        </p>
      </div>
    </article>
    <article id="specialty" class="dark">
      <h2 class="fadein">
        SPECIALTY
      </h2>
      <hr />
      <div class="box">
        <div class="box_item chart">
          <ChartRadar
            :chart-data="raderChart.data"
            :options="raderChart.options"
          />
        </div>
        <div class="box_item chart">
          <ChartDoughnut
            :chart-data="doughnutChart.data"
            :options="doughnutChart.options"
          />
        </div>
      </div>
    </article>
    <article id="skills">
      <h2 class="fadein">
        SKILLS
      </h2>
      <hr />
      <div class="skill fadein">
        <div class="skill-header">
          フロントエンド
        </div>
        <div class="skill-caption">
          フロントエンドは技術の進化が早くて学習することが多いですが、javascriptは一番好きな言語なので魅力的に感じます。直近ではNuxt.js・TypeScript・Vuejsを使用して開発をしていました。
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Vue.js</p>
            新規でSPAを構築したり、既存のWebアプリに組み込んだりするときに主に使っています。
            簡単かつ柔軟で使いやすく開発で利用するケースも増えています。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Nuxt.js</p>
            ディレクトリ構造など規約がしっかりと決まっていて判りやすくなった印象です。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Typescript</p>
            TypeScriptの型システムにより未然にエラーや凡ミスを防げることも魅力的に感じます。このサイトもNuxt.js&TypeScript&Vuetifyで作成されています。
          </div>
          <div class="rating">
            ★★☆
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>JQuery</p>
            DOM操作はもちろんおしゃれなUIを実現するためのプラグイン作成まで対応可能です。クライアントのこだわりの強い難しい要望にも対応可能です。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Node.js</p>
            最近は主にCLIツールとして使用しています。Expressを利用したWebアプリケーションを作成することもあります。
          </div>
          <div class="rating">
            ★★☆
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>AMP・PWA</p>
            SEO対策の一貫でランディングページをAMP化しました。表示が早くなりGoogleからの評価も高くなりました。またPWAではServiceWorkerを作成するなどして負荷改善にも繋がりました。
          </div>
          <div class="rating">
            ★★☆
          </div>
        </div>
      </div>
      <div class="skill fadein">
        <div class="skill-header">
          Java
        </div>
        <div class="skill-caption">
          Javaを利用した開発に携わることがもっとも多かったので、開発はもちろんですがフレームワークの選定から基盤構築までアーキテクチャ全体を対応する事が可能です。
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Spring Boot</p>
            Springフレームワーク自体はDI機能が流行りだした2006年頃から利用していました。当時はXMLの記述が複雑で苦労しましたが、進化を遂げて使いやすくなり今でも開発で利用する機会が多いです。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Play Framework</p>
            2012年頃から1年ほどAndroid向けのAPI開発で利用していました。
          </div>
          <div class="rating">
            ★★☆
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>SAStruts</p>
            2010年頃から5年ほど複数の開発で利用していました。サポートが終了して以降はあまり利用していません。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Apache Struts</p>
            2010年頃まではもっとも利用していました。Struts2も利用していましたが脆弱性の問題が発生した2017年以降はあまり利用しなくなりました。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Apache Wicket</p>
            SNSの開発で1年ほど利用していました。軽量でUIに特化したフレームワークで開発しやすい印象でした。
          </div>
          <div class="rating">
            ★★☆
          </div>
        </div>
      </div>
      <div class="skill fadein">
        <div class="skill-header">
          DB
        </div>
        <div class="skill-caption">
          SQLの作成はもちろんですが、データベースのチューニングやレプリケーション構築などの経験もあります。
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Oracle</p>
            業務で6年ほど利用していました。OracleMasterの資格もあります。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>MySQL</p>
            業務で8年ほど利用していました。データベースのチューニングやレプリケーションなどの経験もあります。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>MongoDB</p>
            Node.jsを利用したWebアプリケーション開発で利用していました。JSONをそのままの形で
            KeyValueストア出来る使いやすさが印象的でした。
          </div>
          <div class="rating">
            ★★☆
          </div>
        </div>
      </div>
      <div class="skill fadein">
        <div class="skill-header">
          インフラ
        </div>
        <div class="skill-caption">
          元々サーバーサイドのエンジニアだったのでインフラに関わることが多く、ApacheやTomcatの構築なども対応可能です。最近では、ECR(AWS)やDocker
          の構築も対応しております。
        </div>
        <div class="skill-item">
          <div class="text">
            <p>AWS</p>
            EC2、RDS、Lambda、API Gateway、ECR
            など3年ほど業務で利用していました。
          </div>
          <div class="rating">
            ★★☆
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Jenkins</p>
            継続的に自動でデプロイする仕組みとして10年ほど業務で利用していました。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Zabbix</p>
            サイトの死活監視に利用していました。
          </div>
          <div class="rating">
            ★★☆
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>New Relic</p>
            サイトの死活監視とパフォーマンス分析に利用していました。
          </div>
          <div class="rating">
            ★☆☆
          </div>
        </div>
      </div>
      <div class="skill fadein">
        <div class="skill-header">
          検索エンジン
        </div>
        <div class="skill-caption">
          ニュースサイトのようなコンシューマー向けの検索結果画面に利用していました。
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Solr</p>
            スキーマの設計からインデックスを生成するためのバッチ作成・インデックスを利用した検索・取得処理など3年ほど経験があります。機能が豊富で実績も沢山ある検索エンジンなので多くの開発で利用していました。
          </div>
          <div class="rating">
            ★★★
          </div>
        </div>
        <div class="skill-item">
          <div class="text">
            <p>Elasticsearch</p>
            クラスタの構築が簡単だった事とUIが使いやすい印象でした。1年ほど業務で利用していました。
          </div>
          <div class="rating">
            ★☆☆
          </div>
        </div>
      </div>
      <div class="skill fadein">
        <div class="skill-header">
          保有資格
        </div>
        <div class="skill-caption">
          ビジネス能力検定、航空特殊無線技士、牽引自動車、大型特殊自動車、フォークリフト、車両系建設機械、高所作業車、危険物乙4、第二級陸上特殊無線技士、国際航空貨物取扱士、航空危険物取扱士、ガス溶接、アーク溶接、床上操作式クレーン
          など保有資格が沢山ありますが、IT系の資格は以下になります。
        </div>
        <div class="skill-item">
          <p>ORACLE MASTER Silver</p>
          入社して間もない頃にデータベースの学習の為に取得しました。SQLの記述やデータベースの仕組みについてこの時に学んだ内容は今でも生きていると思います。
        </div>
        <div class="skill-item">
          <p>Sun Certified Programmer for the Java</p>
          入社して間もない頃にデータベースの学習の為に取得しました。SQLの記述やデータベースの仕組みについてこの時に学んだ内容は今でも生きていると思います。
        </div>
        <div class="skill-item">
          <p>Linux Professional Institute Certification Level1</p>
          シェルコマンドやLinuxサーバのアーキテクチャを学びました。この時に覚えたコマンドや知識が今でも業務で役立っていて、もっとも実務に活かせている資格です。
        </div>
      </div>
    </article>
    <article id="works">
      <h2 class="fadein">
        WORKS
      </h2>
      <hr />
      <div class="box">
        <div class="box_item">
          <div class="mockup fadein">
            <img src="/img/imac.png" width="100%" />
            <div class="site">
              <a href="https://blog.isystk.com/" target="_blank">
                <img src="/img/blog-site.jpg" width="100%" />
              </a>
            </div>
          </div>
        </div>
        <div class="box_item">
          <div class="mockup-description">
            <div class="number fadein">
              <div class="line"></div>
              <div class="label">
                01
              </div>
            </div>
            <a href="https://blog.isystk.com/" target="_blank">
              <p class="title fadein">isystk's blog</p>
              <p class="text fadein">
                私が運営しているブログです。<br />
                主にITエンジニアとして学んだ事を掲載しています。
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box_item">
          <div class="card fadein">
            <a href="#" target="_blank">
              <div class="photo zoom">
                <img src="/img/java-springboot-boilerplate.jpg" />
              </div>
              <p class="title">Java Springboot Boilerplate</p>
              <p class="text">
                Java Springboot Doma2を利用した<br />
                マルチモジュールのボイラープレートです。
              </p>
            </a>
          </div>
        </div>
        <div class="box_item">
          <div class="card fadein">
            <a href="#" target="_blank">
              <div class="photo zoom">
                <img src="/img/nuxtjs-typescript-boilerplate.jpg" />
              </div>
              <p class="title">Nuxt.js Typescript Boilerplate</p>
              <p class="text">
                Nuxt.js Typescript ESLint を利用した<br />
                ボイラープレートです。
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box_item">
          <div class="card fadein">
            <a href="https://demo.isystk.com/kaiji/" target="_blank">
              <div class="photo zoom">
                <img src="/img/kaiji.gif" />
              </div>
              <p class="title">ざわざわスクリプト</p>
              <p class="text">
                XSSの脆弱性があると「ざわざわ」して最後に何かが起こります。
              </p>
            </a>
          </div>
        </div>
        <div class="box_item">
          <div class="card fadein">
            <a href="#" target="_blank">
              <div class="photo zoom">
                <img src="/img/portfolio.jpg" />
              </div>
              <p class="title">このポートフォリオサイトです。</p>
              <p class="text">
                Nuxt.js + TypeScript を利用して作成しています。
              </p>
            </a>
          </div>
        </div>
      </div>
    </article>
    <article id="twitter">
      <h2 class="fadein">
        Twitter
      </h2>
      <hr />
      <div class="box">
        <div class="box_item">
          <p class="title">
            フォロワー数
          </p>
          <div class="followers js-shuffleNum">
            7059
          </div>
        </div>
        <div class="box_item">
          <div class="tweet fadein" style="height: 400px;"></div>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import ChartRadar from "@/components/chart/ChartRadar.vue";
import ChartDoughnut from "@/components/chart/ChartDoughnut.vue";

@Component({
  components: {
    ChartRadar,
    ChartDoughnut
  }
})
export default class extends Vue {
  // レーダーチャート
  get raderChart(): any | null {
    return {
      data: {
        labels: ["スピード感", "精度", "セキュリティ対応", "デザイン力", "SEO"],
        datasets: [
          {
            label: "Webシステムにおける開発能力",
            backgroundColor: "rgba(0, 50, 255, 0.5)",
            borderColor: "rgba(0, 50, 255, 0.5)",
            lineTension: 0,
            fill: true,
            borderWidth: 3,
            data: [100, 80, 60, 40, 70]
          }
        ]
      } as Chart.ChartData,
      options: {
        responsive: true,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: false,
        title: {
          display: true,
          position: "top",
          fontSize: 16,
          padding: 10,
          text: "Webシステムにおける開発能力"
        },
        legend: {
          display: false
        },
        tooltips: {
          display: true
        },
        scale: {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      } as Chart.ChartOptions
    };
  }

  // ドーナツチャート
  get doughnutChart(): any | null {
    return {
      data: {
        labels: [
          "Java",
          "Jquery",
          "Typescript",
          "Nuxt.js",
          "Kotlin",
          "PHP",
          "Python"
        ],
        datasets: [
          {
            label: "プログラミングの得意言語",
            backgroundColor: [
              "#FF0000",
              "#FFFF00",
              "#00FFFF",
              "#800000",
              "#00FF00",
              "#FF00FF",
              "#C0C0C0"
            ],
            borderColor: "#FFFFFF",
            data: [40, 25, 15, 10, 5, 3, 2]
          }
        ]
      } as Chart.ChartData,
      options: {
        responsive: true,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: false,
        title: {
          display: true,
          position: "top",
          fontSize: 16,
          padding: 10,
          text: "プログラミングの得意言語"
        },
        legend: {
          display: true, // 凡例を表示します。
          position: "bottom" // 凡例の位置
        },
        tooltips: {
          display: true
        }
      } as Chart.ChartOptions
    };
  }
}
</script>
