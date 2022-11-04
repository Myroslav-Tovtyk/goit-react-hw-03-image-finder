import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '29598631-67f61c45caf91015f5fc88c1e';

export const PixabayPictures = async (q, page) => {
  const params = {
    key: KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  };
  const response = await axios.get(axios.defaults.baseURL, { params });
  return response.data;
};
