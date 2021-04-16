import {action, makeAutoObservable} from 'mobx';
import {IProduct} from '../api/products.api';
import {productStore} from './index';

class FavoritesStore {
  products: IProduct[] = [];
  productsLoading = false;
  productsFinish = false;

  refreshLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action getProducts = () => {
    return productStore.getFavorites().then((res) => {
      if (res) {
        res.forEach(productStore.addInFavorite);
        this.setProducts(res);
      }
    });
  };

  @action init = async () => {
    this.setProductsLoading(true);
    this.setProductsFinish(false);
    await this.getProducts().finally(() => {
      this.setProductsLoading(false);
      this.setProductsFinish(true);
    });
  };

  @action refresh = async () => {
    this.setRefreshLoading(true);
    this.getProducts().finally(() => this.setRefreshLoading(false));
  };

  @action toggleFavorite = async (id: string) => {
    productStore.toggleFavorite(id).then(() => {
      this.togglePopularProductFavorite(id);
    });
  };

  @action togglePopularProductFavorite = (id: string) => {
    this.setProducts(this.products.filter((prod) => prod.id !== id));
  };

  @action setRefreshLoading = (val: boolean) => {
    this.refreshLoading = val;
  };

  @action setProducts = (data: IProduct[]) => {
    this.products = data;
  };

  @action setProductsLoading = (val: boolean) => {
    this.productsLoading = val;
  };

  @action setProductsFinish = (val: boolean) => {
    this.productsFinish = val;
  };
}

const favoritesStore = new FavoritesStore();
export default favoritesStore;
