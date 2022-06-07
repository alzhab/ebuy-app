import {action, makeAutoObservable} from 'mobx';
import customersApi, {ICustomer, ICustomerUpdate} from '../api/customers.api';
import {catchErrors} from '@utils';
import noticeMessageStore, {NoticeTypeEnum} from './NoticeMessageStore';
import {authStore, profileStore} from './index';

class ProfileStore {
  user: ICustomer | null = null;
  loading = false;
  refreshLoading = false;

  editLoading = false;
  editSuccess = false;

  constructor() {
  	makeAutoObservable(this);
  }

  @action getProfile = () => {
  	return customersApi
  		.getProfile()
  		.then((res) => {
  			this.setUser(res);
  		})
  		.catch((e) =>
  			catchErrors.storeCatchError(e, () => {
  				authStore.logout();
  			}),
  		);
  };

  @action init = () => {
  	this.setLoading(true);
  	this.getProfile().finally(() => this.setLoading(false));
  };

  @action refresh = () => {
  	this.setRefreshLoading(true);
  	this.getProfile().finally(() => this.setRefreshLoading(false));
  };

  @action updateProfile = (data: ICustomerUpdate) => {
  	this.setEditLoading(true);
  	customersApi
  		.updateProfile(data)
  		.then((res) => {
  			noticeMessageStore.showMessage(
  				'Profile successfully updated',
  				NoticeTypeEnum.success,
  			);
  			this.setUser(res);
  			this.setEditSuccess(true);
  		})
  		.catch(catchErrors.storeCatchError)
  		.finally(() => {
  			this.setEditLoading(false);
  			this.setEditSuccess(false);
  		});
  };

  @action setLoading = (val: boolean): void => {
  	this.loading = val;
  };

  @action setRefreshLoading = (val: boolean): void => {
  	this.refreshLoading = val;
  };

  @action setEditLoading = (val: boolean): void => {
  	this.editLoading = val;
  };

  @action setEditSuccess = (val: boolean): void => {
  	this.editSuccess = val;
  };

  @action setUser = (val: ICustomer | null) => {
  	this.user = val;
  };
}

const modalStore = new ProfileStore();
export default modalStore;
