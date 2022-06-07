import { BaseApi, BaseEntity } from './base.api'
import axiosInstance from '../config/axios'

export interface ICategory extends BaseEntity {
  name: string
  img: string

  // products?:
}

class CategoriesApi extends BaseApi<ICategory> {
  constructor() {
    super('categories')
  }

  async search(value: string): Promise<ICategory[]> {
    return axiosInstance
      .get(`${this.api}/search`, { params: { search: value } })
      .then(res => res.data)
  }
}

const categoriesApi = new CategoriesApi()

export default categoriesApi
