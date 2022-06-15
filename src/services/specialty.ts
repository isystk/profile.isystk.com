import MainService from '@/services/main'
import { Api } from '@/constants/api'
import axios from 'axios'
import _ from 'lodash'

import Json from '@/public/data/specialty.json'
export type Specialty = typeof Json

export default class SpecialtyService {
  main: MainService
  data: Specialty

  constructor(main: MainService) {
    this.main = main
    this.data = {}
  }

  async readData() {
    this.data = await axios
      .get(Api.SPECIALTY, {headers: {},})
      .then((res) => res.data)
  }

  radarChart() {
    const quality = _.slice(this.data, 0, 1)[0]
    return {
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
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
        plugins: {
          title: {
            display: true,
            text: quality.title,
          },
          legend: {
            display: false
          },
        }
      },
    }
  }

  doughnutChart() {
    const program = _.slice(this.data, 1, 2)[0]
    return {
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
        plugins: {
          title: {
            display: true,
            text: program.title,
          },
          legend: {
            display: true, // 凡例を表示します。
            position: 'bottom', // 凡例の位置
          },
        }
      },
    }
  }

}
