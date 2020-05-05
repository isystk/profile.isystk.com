<template>
  <article id="skills">
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <h2>
        SKILLS
      </h2>
    </Scrollin>
    <hr :class="{ centerToSide: isScreenin() }" />
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <div class="skill">
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
    </Scrollin>
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <div class="skill">
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
    </Scrollin>
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <div class="skill">
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
    </Scrollin>
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <div class="skill">
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
    </Scrollin>
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <div class="skill">
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
    </Scrollin>
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <div class="skill">
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
    </Scrollin>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Scrollin from "@/components/parts/Scrollin.vue";

@Component({
  components: {
    Scrollin
  }
})
export default class Skills extends Vue {
  // スクロール位置
  scroll = 0;
  // 表示画面の高さ
  windowHeight = 0;

  mounted(): void {
    window.addEventListener("load", this.onScroll);
    window.addEventListener("scroll", this.onScroll);
  }

  beforeDestroy(): void {
    window.removeEventListener("load", this.onScroll);
    window.removeEventListener("scroll", this.onScroll);
  }

  // 画面スクロール時の処理
  onScroll(): void {
    if (!process.browser) {
      return;
    }
    this.scroll = window.pageYOffset || document.documentElement.scrollTop;
    this.windowHeight = window.innerHeight;
  }

  // 要素が画面内に表示されているかどうか
  isScreenin(): boolean {
    if (!process.browser) {
      return false;
    }
    const el = this.$el as HTMLElement;
    if (
      this.scroll >
      el.offsetTop - this.windowHeight + this.windowHeight / 10
    ) {
      return true;
    }
    return false;
  }
}
</script>
