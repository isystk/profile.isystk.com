import ProfileState from '@/states/profile';

export default class RootState {
  public isLoading: boolean;
  public toastMessage: string | null;
  public profile: ProfileState;

  constructor() {
    this.isLoading = false;
    this.toastMessage = null;
    this.profile = new ProfileState();
  }
}
