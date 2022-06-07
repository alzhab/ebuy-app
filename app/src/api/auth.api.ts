import {API} from './constants';
import axiosInstance from '../config/axios';

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  birth_date: Date | null;
  interested_in?: 'men' | 'woman' | null;
}

export interface SignupData {
  token: string;
  userId: string;
}

class AuthApi {
  private readonly api: string;

  constructor() {
  	this.api = `${API}/auth/customer`;
  }

  async signup(data: IRegister): Promise<SignupData> {
  	return axiosInstance.post(`${this.api}/register`, data).then((res) => {
  		return res.data;
  	});
  }

  async login(data: ILogin): Promise<SignupData> {
  	return axiosInstance.post(`${this.api}/login`, data).then((res) => {
  		return res.data;
  	});
  }
}

const authApi = new AuthApi();

export default authApi;
