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
import { computed } from 'vue'
import { injectStore } from '@/store'
import MainService from '@/services/main'
const main = injectStore<MainService>()

const profileData = computed(() => main?.profile?.data);
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
