import {API} from '../api/constants';

export const getImage = (img: string) => {
  return `${API}/images/${img}`;
};
