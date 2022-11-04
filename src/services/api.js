import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '16763452-f17d9c1e6c077c804b5291364';

export const PixabayPictures = async (q, page) => {
  const params = {
    key: KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page,
  };
  const response = await axios.get(axios.defaults.baseURL, { params });
  return response.data;
};
