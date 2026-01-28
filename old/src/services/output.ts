import MainService from '@/services/main'
import { Api } from '@/constants/api'
import apiClient from '@/utilities/apiClient'

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
    this.data = await apiClient.get(Api.OUTPUTS).then((res) => res.data)
  }
}
