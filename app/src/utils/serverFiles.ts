import {API} from '../api/constants';

const serverImage = (image: string) => `${API}/images/${image}`;

export default {
  serverImage,
};
