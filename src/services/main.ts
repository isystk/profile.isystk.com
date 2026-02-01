import ProfileService from '@/services/profile';
import RootState from '@/states/root';

export default class MainService {
  public readonly root: RootState;
  private readonly _setRootState: (root: RootState) => void;
  public profile: ProfileService;

  constructor(root: RootState, setRootState: (root: RootState) => void) {
    this.root = root;
    this._setRootState = setRootState;
    this.profile = new ProfileService(this);
    this.setRootState();
  }

  public setRootState() {
    this._setRootState(this.root);
  }

  public showLoading() {
    this.root.isLoading = true;
    this.setRootState();
  }
  public hideLoading() {
    this.root.isLoading = false;
    this.setRootState();
  }

  public showToastMessage(message: string) {
    this.root.toastMessage = message;
    this.setRootState();
  }
  public hideToastMessage() {
    this.root.toastMessage = null;
    this.setRootState();
  }
}
