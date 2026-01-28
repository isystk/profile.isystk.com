<template lang="pug">
v-card#introduction
  v-container.container(fluid='')
    elements-scrollin(class-default='fadein' class-change='scrollin')
      h2.text-center INTRODUCTION
    elements-hr
    v-row(dense='')
      v-col.order-md-last.mb-10.mb-md-0(cols='12' md='6')
        elements-scrollin(class-default='fadein' class-change='scrollin')
          img.avatar(:src='profileData.imageUrl')
      v-col(cols='12' md='6')
        elements-scrollin(class-default='fadein' class-change='scrollin')
          span(v-html='profileData.message')
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { injectStore } from '@/store'
import MainService from '@/services/main'
const main = injectStore<MainService>()

const profileData = computed(() => main?.profile?.data)
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
