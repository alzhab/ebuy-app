import {BaseApi, BaseEntity} from './base.api';
import axios from 'axios';
import {Platform} from 'react-native';
import {getFile} from '@utils';

export interface IImage {
  uri: string;
  type: string;
  name: string;
}

export interface ICustomer extends BaseEntity {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  birth_date: Date;
  interested_in: 'men' | 'woman';
  avatar_path: string | null;
}

export interface ICustomerUpdate {
  email?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
  birth_date?: Date;
  interested_in?: 'men' | 'woman';
  avatar?: IImage;
}

class CustomersApi extends BaseApi<ICustomer> {
  constructor() {
    super('customers');
  }

  async toggleFavorite(productId: string): Promise<ICustomer> {
    return axios
      .put(`${this.api}/toggle_favorite/${productId}`, {
        headers: this.getHeaders(),
      })
      .then((res) => {
        return res.data || {};
      });
  }

  async getProfile(): Promise<ICustomer> {
    return axios
      .get(`${this.api}/profile`, {
        headers: this.getHeaders(),
      })
      .then((res) => {
        return res.data || {};
      });
  }

  async updateProfile(data: ICustomerUpdate): Promise<ICustomer> {
    const formData = new FormData();

    for (const dataKey in data) {
      if (data.hasOwnProperty(dataKey)) {
        if (dataKey === 'avatar' && data.avatar) {
          formData.append('avatar', getFile(data.avatar));
        } else if (dataKey === 'birth_date' && data.birth_date) {
          formData.append(
            'birth_date',
            new Date(data.birth_date).toUTCString(),
          );
        } else {
          if (typeof data[dataKey] === 'object') {
            formData.append(dataKey, JSON.stringify(data[dataKey]));
          } else {
            formData.append(dataKey, data[dataKey]);
          }
        }
      }
    }

    return axios
      .put(`${this.api}/profile`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        return res.data || {};
      });
  }
}

const customersApi = new CustomersApi();

export default customersApi;
