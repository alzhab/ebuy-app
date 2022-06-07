import MockAdapter from 'axios-mock-adapter'
import CATEGORY_PRODUCTS from './products.json'

const ProductsPageMock = (mock: MockAdapter) => {
  mock.onGet('/products/by-category').reply(config => {
    const categoryId = config.params.categoryId

    console.log(categoryId)

    return [
      200,
      CATEGORY_PRODUCTS.filter(item => item.categories.includes(categoryId)),
    ]
  })
}

export default ProductsPageMock
