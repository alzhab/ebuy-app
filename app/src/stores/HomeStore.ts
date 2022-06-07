import categoriesApi, {ICategory} from '../api/categories.api';
import {action, makeAutoObservable} from 'mobx';
import {catchErrors} from '@utils';
import {IProduct} from '../api/products.api';
import {productStore} from './index';

class HomeStore {
  popularCategories: ICategory[] = [];
  popularCategoriesLoading = false;
  popularCategoriesFinish = false;

  popularProducts: IProduct[] = [];
  popularProductsLoading = false;
  popularProductsFinish = false;

  refreshLoading = false;

  constructor() {
  	makeAutoObservable(this);
  }

  @action getCategories = () => {
  	return categoriesApi
  		.getAll({take: 3})
  		.then((res) => {
  			this.setPopularCategories(res);
  		})
  		.catch(catchErrors.storeCatchError);
  };

  @action getProducts = () => {
  	return productStore.getPopular().then((res) => {
  		if (res) {
  			res.forEach(productStore.addInFavorite);
  			this.setPopularProducts(res);
  		}
  	});
  };

  @action loadPopularCategories = async () => {
  	this.setPopularCategoriesLoading(true);
  	this.setPopularCategoriesFinish(false);
  	await this.getCategories().finally(() => {
  		this.setPopularCategoriesLoading(false);
  		this.setPopularCategoriesFinish(true);
  	});
  };

  @action loadPopularProducts = async () => {
  	this.setPopularProductsLoading(true);
  	this.setPopularProductsFinish(false);
  	await this.getProducts().finally(() => {
  		this.setPopularProductsLoading(false);
  		this.setPopularProductsFinish(true);
  	});
  };

  @action init = () => {
  	this.loadPopularCategories();
  	this.loadPopularProducts();
  };

  @action refresh = async () => {
  	this.setRefreshLoading(true);
  	Promise.all([this.getCategories(), this.getProducts()]).finally(() =>
  		this.setRefreshLoading(false),
  	);
  };

  @action toggleFavorite = async (id: string) => {
  	productStore.toggleFavorite(id).then(() => {
  		this.togglePopularProductFavorite(id);
  	});
  };

  @action togglePopularProductFavorite = (id: string) => {
  	const index: number = this.popularProducts.findIndex(
  		(prod) => prod.id === id,
  	);

  	if (index !== -1) {
  		this.popularProducts[index].inFavorite = !this.popularProducts[index]
  			.inFavorite;
  	}
  };

  @action setRefreshLoading = (val: boolean) => {
  	this.refreshLoading = val;
  };

  @action setPopularCategories = (data: ICategory[]) => {
  	this.popularCategories = data;
  };

  @action setPopularCategoriesLoading = (val: boolean) => {
  	this.popularCategoriesLoading = val;
  };

  @action setPopularCategoriesFinish = (val: boolean) => {
  	this.popularCategoriesFinish = val;
  };

  @action setPopularProducts = (data: IProduct[]) => {
  	this.popularProducts = data;
  };

  @action setPopularProductsLoading = (val: boolean) => {
  	this.popularProductsLoading = val;
  };

  @action setPopularProductsFinish = (val: boolean) => {
  	this.popularProductsFinish = val;
  };
}

const homeStore = new HomeStore();
export default homeStore;
