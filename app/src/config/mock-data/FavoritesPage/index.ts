import MockAdapter from 'axios-mock-adapter'
import PRODUCTS from './products.json'

const FavoritesPageMock = (mock: MockAdapter) => {
  mock.onGet('/products/favorites').reply(config => {
    return [
      200,
      PRODUCTS
    ]
  })
}

export default FavoritesPageMock
