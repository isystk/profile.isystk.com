<template>
  <v-card id="introduction">
    <v-container fluid class="container">
      <elements-scrollin class-default="fadein" class-change="scrollin">
        <h2 class="text-center">INTRODUCTION</h2>
      </elements-scrollin>
      <elements-hr />
      <v-row dense>
        <v-col cols="12" md="6" class="order-md-last mb-10 mb-md-0">
          <elements-scrollin class-default="fadein" class-change="scrollin">
            <img :src="profileData.imageUrl" class="avatar" />
          </elements-scrollin>
        </v-col>
        <v-col cols="12" md="6">
          <elements-scrollin class-default="fadein" class-change="scrollin">
            <span v-html="profileData.message"></span>
          </elements-scrollin>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
// 自己紹介データ
const profileData = {
  // return portfolioModule.profile
  imageUrl: '/img/avatar.jpg',
  message:
    'はじめまして。伊勢と申します。Webを中心にシステムエンジニアとして18年ほど業務しています。\n新卒では中小企業のSIerに入社しました。SESとして常駐先で基本設計から開発/テストまでウォーターフォール型のシステム開発を学び、Javaを中心に証券会社や保険会社などの基幹システム開発に携わりました。\n5年努めたのちSOHOとして独立、独立後はソーシャルゲーム開発やReact.jsやVue.jsなどフロントエンドの技術を学びました。現在は、故郷の北海道（函館）に移住して、フルリモートでシステムエンジニアに従事しております。サーバーサイドからフロントエンド、サーバー構築までフルスタックに対応致します。\n(2022年3月更新)',
  twitter_follower: 6832,
}
</script>

<style lang="scss" scoped>
#introduction {
  line-height: 1.5;
}

#introduction img.avatar {
  border-radius: 50%;
  width: 50%;
  margin: auto;
}

@media screen and (min-width: 992px) {
  #introduction {
    font-size: 18px;
    line-height: 1.5;
  }
}
</style>
