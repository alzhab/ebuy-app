import { BaseApi, BaseEntity } from './base.api'
import { ICategory } from './categories.api'
import { ICustomer } from './customers.api'
import axiosInstance from '../config/axios'

export interface IProduct extends BaseEntity {
  name: string
  price: number
  description: string
  video: string
  image: string
  images: string[]

  categories?: ICategory[]
  customers?: ICustomer[]

  // Custome fields
  inFavorite?: boolean
}

export interface ICartProduct {
  product: IProduct
  count: number
  color: string
}

class ProductsApi extends BaseApi<IProduct> {
  constructor() {
    super('products')
  }

  async getPopular(): Promise<IProduct[]> {
    return axiosInstance.get(`${this.api}/popular`).then(res => res.data)
  }

  async getByCategory(categoryId: string): Promise<IProduct[]> {
    return axiosInstance
      .get(`${this.api}/by-category`, { params: { categoryId } })
      .then(res => res.data)
  }

  async getFavorite(): Promise<IProduct[]> {
    return axiosInstance.get(`${this.api}/favorites`).then(res => res.data)
  }
}

const productsApi = new ProductsApi()

export default productsApi
