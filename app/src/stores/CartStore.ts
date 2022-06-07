import { action, makeAutoObservable } from 'mobx'
import { ICartProduct, IProduct } from '../api/products.api'
import { noticeMessageStore } from './index'
import { NoticeTypeEnum } from './NoticeMessageStore'

class CartStore {
  products: ICartProduct[] = []

  constructor() {
    makeAutoObservable(this)
  }

  @action
  checkout() {
    this.products = []
    noticeMessageStore.showMessage(
      'Your order successfully checkouted',
      NoticeTypeEnum.success,
    )
  }

  @action
  addProduct(product: IProduct, color: string) {
    const existIndex = this.products.findIndex(
      item => item.product.id === product.id,
    )

    if (existIndex === -1) {
      this.products.push({
        product,
        color,
        count: 1,
      })
    } else {
      this.products[existIndex].count += 1
    }
  }

  @action
  deleteProduct(product: IProduct) {
    const existIndex = this.products.findIndex(
      item => item.product.id === product.id,
    )

    if (existIndex !== -1) {
      this.products.splice(existIndex, 1)
    }
  }
}

const cartStore = new CartStore()
export default cartStore
