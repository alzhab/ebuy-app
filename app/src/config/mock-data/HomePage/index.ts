import MockAdapter from 'axios-mock-adapter';
import CATEGORIES_MOCK from './categories.json';
import POPULAR_CATEGORIES_MOCK from './popular-products.json';

const HomePageMock = (mock: MockAdapter) => {
	mock.onGet("/categories", {params: {filter: "{\"take\":3}"}}).reply(200, CATEGORIES_MOCK.slice(0, 3));
	mock.onGet("/products/popular").reply(200, POPULAR_CATEGORIES_MOCK);
}

export default HomePageMock
