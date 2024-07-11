import { formInput, gallery } from '../main';
import axios from 'axios';

let page = 1;
let perPage = 15;

const fetchPostsBtn = document.querySelector('.btn-page');
fetchPostsBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts();
    renderPosts(posts);
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      fetchPostsBtn.textContent = 'Fetch more posts';
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts() {
  const params {
    _limit: perPage,
    _page: page,
  };
}

export async function getPicturesByQuery() {
  const query = formInput.value;
  console.log(query);
  const API_KEY = '44763661-907a9c415cab9d29c7901c7cc';
  return (
    await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true${params}`
    )
  ).data;
}
