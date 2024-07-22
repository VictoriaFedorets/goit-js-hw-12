import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '44763661-907a9c415cab9d29c7901c7cc';

export async function getPicturesByQuery(q = '', page = 1, perPage = 15) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error images:', error);
    throw error;
  }
}
