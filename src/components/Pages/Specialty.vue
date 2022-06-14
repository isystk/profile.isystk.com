<template>
  <v-card id="specialty">
    <v-container fluid class="container dark">
      <elements-scrollin class-default="fadein" class-change="scrollin">
        <h2 class="text-center">SPECIALTY</h2>
      </elements-scrollin>
      <elements-hr />
      <div v-if="state.isShowChart" class="box">
        <div class="box_item chart">
          <RadarChart
            :chart-data="state.radarChart.data"
            :options="state.radarChart.options"
          />
        </div>
        <div class="box_item chart">
          <DoughnutChart
            :chart-data="state.doughnutChart.data"
            :options="state.doughnutChart.options"
          />
        </div>
      </div>
    </v-container>
  </v-card>
</template>

<script lang="ts" setup>
import _ from 'lodash'
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js'
import { RadarChart, DoughnutChart } from 'vue-chart-3'
import { ref, reactive, onBeforeMount, onBeforeUnmount, onMounted } from 'vue'

// 使用するモジュールの宣言
// ここでは便宜上、全てのモジュールを使用する registerables を使用しているが、
// 必要十分なモジュールのみを宣言することで、ツリーシェイキングを行うことができる
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
  // チャートの表示
  if (
    state.scroll >
    getPosition() - state.windowHeight + state.windowHeight / 3
  ) {
    if (!state.isShowChart) {
      state.isShowChart = true
      viewChart()
    }
  }
}

const componentRef = ref<HTMLElement | null>(null)
const getPosition = (): number => {
  const el = componentRef.value
  if (el) {
    // return el.offsetTop
    return el.getBoundingClientRect().top
  } else {
    return 0
  }
}

// チャートに表示するデータを設定する
const viewChart = (): any => {
  const specialty = [
    {
      title: 'Webシステムにおける開発能力',
      type: 'radar',
      items: [
        { label: 'スピード感', color: '#FF0000', data: 100 },
        { label: '精度', color: '#FFFF00', data: 80 },
        { label: 'セキュリティ対応', color: '#00FFFF', data: 70 },
        { label: 'デザイン力', color: '#800000', data: 50 },
        { label: 'SEO', color: '#C0C0C0', data: 80 },
      ],
    },
    {
      title: 'プログラミングの得意言語',
      type: 'doughnut',
      items: [
        { label: 'java', color: '#FF0000', data: 30 },
        { label: 'PHP(Laravel)', color: '#FF00FF', data: 25 },
        { label: 'Jquery', color: '#FFFF00', data: 15 },
        { label: 'React.js', color: '#C0C0C0', data: 15 },
        { label: 'Vue.js', color: '#00FFFF', data: 5 },
        { label: 'Typescript', color: '#800000', data: 10 },
      ],
    },
  ]
  const quality = specialty[0]
  const program = specialty[1]

  // レーダーチャート
  state.radarChart = {
    data: {
      labels: _.map(quality.items, 'label'),
      datasets: [
        {
          label: quality.title,
          backgroundColor: 'rgba(0, 50, 255, 0.5)',
          borderColor: 'rgba(0, 50, 255, 0.5)',
          lineTension: 0,
          fill: true,
          borderWidth: 3,
          data: _.map(quality.items, 'data'),
        },
      ],
    },
    options: {
      responsive: true,
      responsiveAnimationDuration: 0,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        fontSize: 16,
        padding: 10,
        text: quality.title,
      },
      legend: {
        display: false,
      },
      tooltips: {
        display: true,
      },
      scale: {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
    },
  }

  // ドーナツチャート
  state.doughnutChart = {
    data: {
      labels: _.map(program.items, 'label'),
      datasets: [
        {
          label: program.title,
          backgroundColor: _.map(program.items, 'color'),
          borderColor: '#FFFFFF',
          data: _.map(program.items, 'data'),
        },
      ],
    },
    options: {
      responsive: true,
      responsiveAnimationDuration: 0,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        fontSize: 16,
        padding: 10,
        text: program.title,
      },
      legend: {
        display: true, // 凡例を表示します。
        position: 'bottom', // 凡例の位置
      },
      tooltips: {
        display: true,
      },
    },
  }
}
</script>

<style lang="scss" scoped>
#specialty {
}

#specialty .chart {
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  background-color: #fff;
}

@media screen and (min-width: 992px) {
  #specialty .chart {
    margin: 10px;
  }
}
</style>
