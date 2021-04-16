import {action, makeAutoObservable, runInAction} from 'mobx';

export enum NoticeTypeEnum {
  error = 'ERROR',
  success = 'SUCCESS'
}

class NoticeMessageStore {
  show = false;
  text = '';
  type: NoticeTypeEnum = NoticeTypeEnum.success;
  
  constructor() {
  	makeAutoObservable(this)
  }
  
  @action showMessage = (message: string, type: NoticeTypeEnum): void => {
  	if(!this.show) {
  		this.show = true;
  		this.text = message;
  		this.type = type;
  
  		setTimeout(() => {
  			runInAction(() => {
  				this.show = false;
  				this.text = message;
  			})
  		}, 2000)
  	}
  }
}

const noticeMessageStore = new NoticeMessageStore();
export default noticeMessageStore;
