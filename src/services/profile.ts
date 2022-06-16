import MainService from '@/services/main'
import { Api } from '@/constants/api'
import apiClient from '@/utilities/apiClient'

import Json from '@/public/data/profile.json'
export type Profile = typeof Json

export default class ProfileService {
  main: MainService
  data: Profile

  constructor(main: MainService) {
    this.main = main
    this.data = {}
  }

  async readData() {
    this.data = await apiClient.get(Api.PROFILE).then((res) => res.data)
  }
}
