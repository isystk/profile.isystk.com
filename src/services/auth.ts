import MainService from '@/services/main';
import AuthState, { type User } from '@/states/auth';
import { Api } from '@/constants/api';

export type LoginForm = {
  email: string;
  password: string;
};

export default class AuthService {
  main: MainService;
  auth: AuthState;

  constructor(main: MainService) {
    this.main = main;
    this.auth = main.root.auth;
  }

  setUser(user: User) {
    this.auth.userId = user.id;
    this.auth.name = user.name;
    this.auth.email = user.email;
    this.auth.emailVerifiedAt = user.email_verified_at;
    this.main.setRootState();
  }

  /**
   * ログイン処理
   */
  async login(values: LoginForm): Promise<void> {
    this.main.showLoading();
    try {
      console.log({ values });
      const response = await fetch(Api.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(values),
      });
      const { token } = await response.json();
      localStorage.setItem('token', token);
    } catch (e) {
      this.main.showToastMessage('ログインに失敗しました');
      throw e;
    } finally {
      this.main.hideLoading();
    }
  }

  /**
   * ログインチェック
   */
  async loginCheck(): Promise<void> {
    this.main.showLoading();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(Api.LOGIN_CHECK, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
      });
      const user = await response.json();
      this.setUser(user);
    } catch {
      // 未ログインの場合
    } finally {
      this.main.hideLoading();
    }
  }

  /**
   * ログアウト処理
   */
  async logout(): Promise<void> {
    this.main.showLoading();
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(Api.LOGOUT, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      await response.json();
      this.setUser({} as User);
    } catch (e) {
      this.main.showToastMessage('ログアウトに失敗しました');
      throw e;
    } finally {
      this.main.hideLoading();
    }
  }
}
