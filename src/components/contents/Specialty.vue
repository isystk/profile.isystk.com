<template>
  <article id="specialty" class="dark">
    <Scrollin :class-default="'fadein'" :class-change="'scrollin'">
      <h2>
        SPECIALTY
      </h2>
    </Scrollin>
    <hr :class="{ centerToSide: isScreenin() }" />
    <div v-if="isShowChart" class="box">
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import _ from "lodash";
import Scrollin from "@/components/parts/Scrollin.vue";
import ChartRadar from "@/components/parts/ChartRadar.vue";
import ChartDoughnut from "@/components/parts/ChartDoughnut.vue";
import { portfolioModule, Profile } from "@/store/portfolio";

@Component({
  components: {
    Scrollin,
    ChartRadar,
    ChartDoughnut
  }
})
export default class Specialty extends Vue {
  // スクロール位置
  scroll = 0;
  // 表示画面の高さ
  windowHeight = 0;

  // チャート表示が完了済みかどうか
  isShowChart = false;
  // チャートの表示データ
  raderChart = {};
  doughnutChart = {};

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

    // チャートの表示
    const specialty = document.getElementById("specialty") as HTMLInputElement;
    if (
      this.scroll >
      specialty.offsetTop - this.windowHeight + this.windowHeight / 10
    ) {
      if (!this.isShowChart) {
        this.isShowChart = true;
        this.viewChart();
      }
    }
  }

  // 要素が画面内に表示されているかどうか
  isScreenin(): boolean {
    if (!process.browser) {
      return false;
    }
    const el = this.$el as HTMLElement;
    if (
      this.scroll >
      el.offsetTop - this.windowHeight + this.windowHeight / 3
    ) {
      return true;
    }
    return false;
  }

  // ツイッターフォロワー数
  get twitterFollower(): number {
    if (!portfolioModule.profile.twitter_follower) {
      return 0;
    }
    return portfolioModule.profile.twitter_follower;
  }

  // チャートに表示するデータを設定する
  viewChart(): any {
    const specialty = portfolioModule.specialty;
    const quality = specialty[0];
    const program = specialty[1];

    // レーダーチャート
    this.raderChart = {
      data: {
        labels: _.map(quality.items, "label"),
        datasets: [
          {
            label: quality.title,
            backgroundColor: "rgba(0, 50, 255, 0.5)",
            borderColor: "rgba(0, 50, 255, 0.5)",
            lineTension: 0,
            fill: true,
            borderWidth: 3,
            data: _.map(quality.items, "data")
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
          text: quality.title
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

    // ドーナツチャート
    this.doughnutChart = {
      data: {
        labels: _.map(program.items, "label"),
        datasets: [
          {
            label: program.title,
            backgroundColor: _.map(program.items, "color"),
            borderColor: "#FFFFFF",
            data: _.map(program.items, "data")
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
          text: program.title
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

<style lang="scss" scoped>
/* 5-2 特技 */

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
