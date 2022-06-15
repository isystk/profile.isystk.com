import MainService from '@/services/main'
import { Api } from '@/constants/api'
import axios from 'axios'

import Json from '@/public/data/skills.json'
export type Skills = typeof Json

export default class SkillService {
  main: MainService
  data: Skills

  constructor(main: MainService) {
    this.main = main
    this.data = []
  }

  async readData() {
    this.data = await axios
      .get(Api.SKILLS, {headers: {},})
      .then((res) => res.data)
  }

}
