import PortfolioState from '@/states/portfolio';

export default class RootState {
  public isLoading: boolean;
  public toastMessage: string | null;
  public portfolio: PortfolioState;

  constructor() {
    this.isLoading = false;
    this.toastMessage = null;
    this.portfolio = new PortfolioState();
  }
}
