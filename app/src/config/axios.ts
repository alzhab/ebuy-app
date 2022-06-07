import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import startMockData from './mock-data.config';

const axiosInstance = axios.create()

startMockData(axiosInstance)

export const getToken = async (): Promise<string | null> => {
	const res = await AsyncStorage.getItem('auth');

	let data;

	if (res) {
		try {
			data = JSON.parse(res);
			return data.token;
		} catch (e) {
			return Promise.reject('parse auth data: ' + e);
		}
	}

	return null;
};

export const setupAxios = async (domain: string) => {
	axiosInstance.defaults.baseURL = domain;
	axiosInstance.interceptors.request.use(
		async (config) => {
			const authToken = await getToken();
			if (authToken) {
				config.headers.Authorization = `Bearer ${authToken}`;
			}

			return config;
		},
		(err) => Promise.reject(err),
	);
 
	axiosInstance.interceptors.response.use(
		(response) => {
			JSON.stringify(response, null, 2);
			return response;
		},
		(error) => {
			// console.log('---error', JSON.stringify(error && error.response));
			return Promise.reject(error);
		},
	);
};

export default axiosInstance
