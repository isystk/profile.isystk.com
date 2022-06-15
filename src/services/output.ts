import MainService from '@/services/main'
import { Api } from '@/constants/api'
import axios from 'axios'

import Json from '@/public/data/outputs.json'
export type Outputs = typeof Json

export default class OutputService {
  main: MainService
  data: []

  constructor(main: MainService) {
    this.main = main
    this.data = []
  }

  async readData() {
    this.data = await axios
      .get(Api.OUTPUTS, {headers: {},})
      .then((res) => res.data)
  }

}
