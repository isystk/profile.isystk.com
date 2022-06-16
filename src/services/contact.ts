import MainService from '@/services/main'
import { Api } from '@/constants/api'
import apiClient from '@/utilities/apiClient'

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
    this.data = await apiClient.get(Api.Contacts).then((res) => res.data)
  }
}
