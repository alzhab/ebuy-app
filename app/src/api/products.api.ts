import {BaseApi, BaseEntity} from './base.api';
import {ICategory} from './categories.api';
import {ICustomer} from './customers.api';
import axios from 'axios';

export interface IProduct extends BaseEntity {
  name: string;
  price: number;
  description: string;
  video: string;

  categories?: ICategory[];
  customers?: ICustomer[];

  // Custome fields
  inFavorite?: boolean;
}

class ProductsApi extends BaseApi<IProduct> {
  constructor() {
    super('products');
  }

  async getPopular(): Promise<IProduct[]> {
    return axios.get(`${this.api}/popular`).then((res) => res.data);
  }

  async getByCategory(categoryId: string): Promise<IProduct[]> {
    return axios
      .get(`${this.api}/by-category/${categoryId}`)
      .then((res) => res.data);
  }

  async getFavorite(): Promise<IProduct[]> {
    return axios.get(`${this.api}/favorites`).then((res) => res.data);
  }
}

const productsApi = new ProductsApi();

export default productsApi;
