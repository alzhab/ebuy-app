import MockAdapter from 'axios-mock-adapter'
import CATEGORIES_MOCK from './categories.json'

const SearchPageMock = (mock: MockAdapter) => {
  mock.onGet('/categories/search').reply(config => {
    const search = config.params.search

    return [200, CATEGORIES_MOCK.filter(item => item.name.includes(search))]
  })
}

export default SearchPageMock
