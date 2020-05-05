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
import Scrollin from "@/components/parts/Scrollin.vue";
import ChartRadar from "@/components/parts/ChartRadar.vue";
import ChartDoughnut from "@/components/parts/ChartDoughnut.vue";

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
      el.offsetTop - this.windowHeight + this.windowHeight / 10
    ) {
      return true;
    }
    return false;
  }

  // チャートに表示するデータを設定する
  viewChart(): any {
    // レーダーチャート
    this.raderChart = {
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

    // ドーナツチャート
    this.doughnutChart = {
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
