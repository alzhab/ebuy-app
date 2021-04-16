import {BaseApi, BaseEntity} from './base.api';
import axios from 'axios';
import {IProduct} from './products.api';

export interface ICategory extends BaseEntity {
  name: string;
  img: string;

  // products?:
}

class CategoriesApi extends BaseApi<ICategory> {
  constructor() {
    super('categories');
  }

  async search(value: string): Promise<ICategory[]> {
    return axios.get(`${this.api}/search/${value}`).then((res) => res.data);
  }
}

const categoriesApi = new CategoriesApi();

export default categoriesApi;
