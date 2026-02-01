import MainService from '@/services/main';
import { Api } from '@/constants/api';
import PortfolioState from '@/states/portfolio';

export default class PortfolioService {
  main: MainService;
  portfolio: PortfolioState;

  constructor(main: MainService) {
    this.main = main;
    this.portfolio = main.root.portfolio;
  }

  async read() {
    try {
      const response = await fetch(Api.Portfolio);
      const data = await response.json();
      Object.assign(this.portfolio, data);
      this.main.setRootState();
    } catch (e) {
      throw e;
    }
  }
}
