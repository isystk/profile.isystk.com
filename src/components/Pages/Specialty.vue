<template>
  <v-card id="specialty">
    <v-container fluid class="container dark">
      <elements-scrollin class-default="fadein" class-change="scrollin">
        <h2 class="text-center">SPECIALTY</h2>
      </elements-scrollin>
      <elements-hr :class-default="['white']"/>
      <div ref="componentRef">
        <v-row dense>
          <v-col cols="12" md="6">
            <RadarChart
                :chart-data="state.radarChart.data"
                :options="state.radarChart.options"
                class="bg-white"
            />
          </v-col>
          <v-col cols="12" md="6" >
            <DoughnutChart
                :chart-data="state.doughnutChart.data"
                :options="state.doughnutChart.options"
                class="bg-white"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import { ref, reactive, onBeforeMount, onBeforeUnmount, onMounted, computed } from 'vue'
import { injectStore } from '@/store'
import _ from 'lodash'
import MainService from '@/services/main'
const main = injectStore<MainService>()

import { Chart, ChartData, ChartOptions, registerables } from 'chart.js'
import { RadarChart, DoughnutChart } from 'vue-chart-3'
Chart.register(...registerables)

type State = {
  scroll: number
  windowHeight: number
  isInScreen: boolean
  isShowChart: boolean
  radarChart: {
    data: ChartData<'radar'>
    options: ChartOptions
  }
  doughnutChart: {
    data: ChartData<'doughnut'>
    options: ChartOptions
  }
}

const state = reactive<State>({
  scroll: 0,
  windowHeight: 0,
  isInScreen: false,
  // チャート表示が完了済みかどうか
  isShowChart: false,
  // チャートの表示データ
  radarChart: {},
  doughnutChart: {},
})

onBeforeMount(() => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
onMounted(() => {
  onScroll()
})

// 画面スクロール時の処理
const onScroll = (): void => {
  state.scroll = window.pageYOffset || document.documentElement.scrollTop
  state.windowHeight = window.innerHeight
  if (state.scroll > getPosition() - state.windowHeight + state.windowHeight / 3) {
    if (!state.isShowChart && _.size(main?.specialty?.data) !== 0) {
      state.radarChart = main?.specialty?.radarChart()
      state.doughnutChart = main?.specialty?.doughnutChart()
      state.isShowChart = true;
    }
  }
}

const componentRef = ref<HTMLElement | null>(null)
const getPosition = (): number => {
  const el = componentRef.value
  if (el) {
    const rect = el.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return rect.top + scrollTop // offset().top;
  } else {
    return 0
  }
}

</script>

<style lang="scss" scoped>
#specialty {
}
</style>
