import { formInput, gallery } from '../main';
import axios from 'axios';

export let page = 1;
export let perPage = 15;
export const totalPages = Math.ceil(100 / perPage);

export async function getPicturesByQuery() {
  const query = formInput.value;
  console.log(query);
  const API_KEY = '44763661-907a9c415cab9d29c7901c7cc';

  const params = new URLSearchParams({
    per_page: perPage,
    page: page,
  });
  return (
    await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true${params}`
    )
  ).data;
}
