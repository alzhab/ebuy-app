import {action, makeAutoObservable} from 'mobx';
import productsApi, {IProduct} from '../api/products.api';
import {catchErrors} from '@utils';
import {FindManyOptions} from 'typeorm';
import customersApi, {ICustomer} from '../api/customers.api';

class ProductStore {
  constructor() {
    makeAutoObservable(this);
  }

  getProducts = (
    options?: FindManyOptions<IProduct>,
  ): Promise<IProduct[] | void> => {
    return productsApi.getAll(options).catch(catchErrors.storeCatchError);
  };

  @action getFavorites = (): Promise<IProduct[] | void> => {
    return productsApi.getFavorite().catch(catchErrors.storeCatchError);
  };

  @action getProductsByCategory = (
    categoryId: string,
  ): Promise<IProduct[] | void> => {
    return productsApi
      .getByCategory(categoryId)
      .catch(catchErrors.storeCatchError);
  };

  addInFavorite = (prod: IProduct) =>
    (prod.inFavorite = prod.customers ? !!prod.customers.length : false);

  @action getPopular = (): Promise<IProduct[] | void> => {
    return productsApi.getPopular().catch(catchErrors.storeCatchError);
  };

  @action toggleFavorite = (productId: string): Promise<ICustomer | void> => {
    return customersApi
      .toggleFavorite(productId)
      .catch(catchErrors.storeCatchError);
  };
}

const productStore = new ProductStore();
export default productStore;
