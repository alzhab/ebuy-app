import MockAdapter from 'axios-mock-adapter'
import { AxiosInstance } from 'axios'
import HomePageMock from './mock-data/HomePage'
import ProductsPageMock from './mock-data/ProductsPage'
import SearchPageMock from './mock-data/SearchPage'
import AuthPageMock from './mock-data/AuthPage'
import ProfilePageMock from './mock-data/ProfilePage'
import FavoritesPageMock from './mock-data/FavoritesPage'

const startMockData = (instance: AxiosInstance) => {
  const mock = new MockAdapter(instance, { delayResponse: 2000 })
  HomePageMock(mock)
  ProductsPageMock(mock)
  SearchPageMock(mock)
  AuthPageMock(mock)
  ProfilePageMock(mock)
  FavoritesPageMock(mock)
}

export default startMockData
