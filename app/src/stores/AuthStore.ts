import {action, makeAutoObservable} from 'mobx';
import authApi, {ILogin, IRegister, SignupData} from '../api/auth.api';
import noticeMessageStore, {NoticeTypeEnum} from './NoticeMessageStore';
import loadingStore from './LoadingStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Navigations} from '@types';
import navigate from '@navigations/RootNavigation';
import {catchErrors} from '@utils';

class AuthStore {
  private _authData = {token: '', userId: ''};
  private _isAuthorized = false;

  constructor() {
  	makeAutoObservable(this);
  }

  getAuthDataFromStorage() {
  	return AsyncStorage.getItem('auth')
  		.then((res) => {
  			if (res !== null) {
  				let data;

  				try {
  					data = JSON.parse(res);
  				} catch (e) {
  					return Promise.reject('parse auth data: ' + e);
  				}
  				this.authData = data;

  				return data;
  			} else {
  				return null;
  			}
  		})
  		.catch((e) => {
  			return Promise.reject('get auth data from storage error: ' + e);
  		});
  }

  setAuthData(data: SignupData) {
  	return AsyncStorage.setItem('auth', JSON.stringify(data))
  		.then(() => {
  			this.authData = data;
  		})
  		.catch((e) => {
  			return Promise.reject('set auth data to storage error: ' + e);
  		});
  }

  @action signup(body: IRegister) {
  	loadingStore.setLoading(false);

  	return authApi
  		.signup(body)
  		.then((data) => {
  			if (data) {
  				this.setAuthData(data).then(() => {
  					noticeMessageStore.showMessage(
  						'Hello new user!',
  						NoticeTypeEnum.success,
  					);
  					navigate(Navigations.Main);
  				});
  			}
  		})
  		.catch(catchErrors.storeCatchError)
  		.finally(() => loadingStore.setLoading(false));
  }

  @action login(body: ILogin) {
  	loadingStore.setLoading(true);
  	return authApi
  		.login(body)
  		.then((data) => {
  			if (data) {
  				this.setAuthData(data).then(() => {
  					noticeMessageStore.showMessage(
  						'Welcome back!',
  						NoticeTypeEnum.success,
  					);
  					navigate(Navigations.Main);
  				});
  			}
  		})
  		.catch(catchErrors.storeCatchError)
  		.finally(() => loadingStore.setLoading(false));
  }

  @action logout() {
  	return this.setAuthData({token: '', userId: ''})
  		.then(() => {
  			navigate(Navigations.Auth);
  		})
  		.catch(catchErrors.storeCatchError);
  }

  get authData() {
  	return this._authData;
  }

  set authData(data: SignupData) {
  	this._isAuthorized = !!(data.token && data.userId);
  	this._authData = data;
  }

  get isAuthorized() {
  	return this._isAuthorized;
  }
}

const authStore = new AuthStore();
export default authStore;
