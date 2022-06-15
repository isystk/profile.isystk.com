import MainService from '@/services/main'
import { Api } from '@/constants/api'
import axios from 'axios'

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
    this.data = await axios
      .get(Api.PROFILE, {headers: {},})
      .then((res) => res.data)
  }

}
