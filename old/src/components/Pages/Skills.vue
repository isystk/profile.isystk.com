<template lang="pug">
v-card#skills
  v-container.container(fluid='')
    elements-scrollin(class-default='fadein' class-change='scrollin')
      h2.text-center SKILLS
    elements-hr
    div(v-for='(e, index) in skillData' :key='index')
      elements-scrollin(class-default='fadein' class-change='scrollin')
        .skill
          .skill-header
            | {{ e.title }}
          .skill-caption
            | {{ e.text }}
          .skill-item(v-for='(e2, index2) in e.items' :key='e.title + index2')
            p {{ e2.name }}
            v-row(dense='')
              v-col.order-md-last.text-center(cols='12' md='3')
                v-rating(v-model='e2.rating' bg-color='orange-lighten-1' color='orange')
              v-col(cols='12' md='9')
                | {{ e2.text }}
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { injectStore } from '@/store'
import MainService from '@/services/main'
const main = injectStore<MainService>()

const skillData = computed(() => main?.skill?.data)
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
  height: 45px;
  font-size: 18px;
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
  font-weight: bold;
  margin: 10px 0;
}

@media screen and (min-width: 992px) {
  .skill-header {
    height: 50px;
    font-size: 24px;
    padding: 8px 0 8px 10px;
  }
}
</style>
