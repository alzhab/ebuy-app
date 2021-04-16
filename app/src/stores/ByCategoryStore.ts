import {action, makeAutoObservable} from 'mobx';
import {IProduct} from '../api/products.api';
import {productStore} from './index';

class ByCategoryStore {
  categoryId: string = '';

  products: IProduct[] = [];
  productsLoading = false;
  productsFinish = false;

  refreshLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action init = (categoryId: string) => {
    this.setCategoryId(categoryId);
    this.loadProducts();
  };

  @action getProducts = () => {
    return productStore.getProductsByCategory(this.categoryId).then((res) => {
      if (res) {
        res.forEach(productStore.addInFavorite);
        this.setProducts(res);
      }
    });
  };

  @action clear = () => {
    this.setProducts([]);
    this.setRefreshLoading(false);
    this.setProductsLoading(false);
    this.setCategoryId('');
    this.setProductsFinish(false);
  };

  @action loadProducts = async () => {
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
      this.toggleProductFavorite(id);
    });
  };

  @action setCategoryId = (val: string) => {
    this.categoryId = val;
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

  @action toggleProductFavorite = (id: string) => {
    const index: number = this.products.findIndex((prod) => prod.id === id);

    if (index !== -1) {
      this.products[index].inFavorite = !this.products[index].inFavorite;
    }
  };
}

const byCategoryStore = new ByCategoryStore();
export default byCategoryStore;
