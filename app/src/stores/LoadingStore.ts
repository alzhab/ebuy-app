import {action, makeAutoObservable} from 'mobx';

class LoadingStore {
  loading = false;
  
  constructor() {
  	makeAutoObservable(this)
  }
  
  @action setLoading = (val: boolean): void => {
  	this.loading = val;
  }
}

const loadingStore = new LoadingStore();
export default loadingStore;
