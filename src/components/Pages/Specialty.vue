<template>
  <v-card id="specialty">
    <v-container fluid class="container dark">
      <elements-scrollin class-default="fadein" class-change="scrollin">
        <h2 class="text-center">SPECIALTY</h2>
      </elements-scrollin>
      <elements-hr :class-default="['white']" />
      <div ref="componentRef">
        <v-row dense>
          <v-col cols="12" md="6">
            <RadarChart
              :chart-data="state.radarChart.data"
              :options="state.radarChart.options"
              class="bg-white"
            />
          </v-col>
          <v-col cols="12" md="6">
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
import { reactive, watch } from 'vue'
import { injectStore } from '@/store'
import _ from 'lodash'
import MainService from '@/services/main'
const main = injectStore<MainService>()

import { Chart, ChartData, ChartOptions, registerables } from 'chart.js'
import { RadarChart, DoughnutChart } from 'vue-chart-3'
Chart.register(...registerables)

type State = {
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
  // チャート表示が完了済みかどうか
  isShowChart: false,
  // チャートの表示データ
  radarChart: {},
  doughnutChart: {},
})

import useScrollin from '@/helper/scrollin'
const { componentRef, isInScreen } = useScrollin()

watch(isInScreen, () => {
  if (isInScreen) {
    if (!state.isShowChart && _.size(main?.specialty?.data) !== 0) {
      state.radarChart = main?.specialty?.radarChart()
      state.doughnutChart = main?.specialty?.doughnutChart()
      state.isShowChart = true
    }
  }
})
</script>

<style lang="scss" scoped>
#specialty {
}
</style>
