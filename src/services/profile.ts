import MainService from '@/services/main';
import { Api } from '@/constants/api';
import ProfileState from '@/states/profile';

export default class ProfileService {
  main: MainService;
  profile: ProfileState;

  constructor(main: MainService) {
    this.main = main;
    this.profile = main.root.profile;
  }

  async read() {
    try {
      const response = await fetch(Api.Profile);
      const data = await response.json();
      Object.assign(this.profile, data);
      this.main.setRootState();
    } catch (e) {
      throw e;
    }
  }
}
