import MainService from '@/services/main'
import { Api } from '@/constants/api'
import axios from 'axios'

import Json from '@/public/data/contacts.json'
export type Contact = typeof Json

export default class ContactService {
  main: MainService
  data: Contact

  constructor(main: MainService) {
    this.main = main
    this.data = []
  }

  async readData() {
    this.data = await axios
      .get(Api.Contacts, {headers: {},})
      .then((res) => res.data)
  }

}
