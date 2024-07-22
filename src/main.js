import { getPicturesByQuery } from './js/pixabay-api';
import { showImages } from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

export const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.form');
const loader = document.querySelector('.loader');
const btnPage = document.querySelector('.btn-page');
// const formInput = document.querySelector('.form-input');

let q = '';
let page = 1;
const perPage = 15;
let totalHits = 0;

searchForm.addEventListener('submit', handlerSearch);

async function handlerSearch(event) {
  event.preventDefault();
  q = event.target.elements.query.value.trim();

  if (q === '') {
    iziToast.error({
      message: 'Please complete the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });

    return;
  }

  page = 1;
  gallery.innerHTML = '';
  offShowLoader(btnPage, loader);

  try {
    const data = await getPicturesByQuery(q, page, perPage);
    totalHits = data.totalHits;

    if (!data.hits.length) {
      iziToast.error({
        position: 'topRight',
        maxWidth: '432px',
        backgroundColor: 'red',
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      showImages(data.hits);

      if (data.hits.length < totalHits) {
        showBtn(btnPage);
      }
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong.',
    });
  } finally {
    loader.classList.add('is-hidden');
  }
}

btnPage.addEventListener('click', showMorePage);

async function showMorePage() {
  page += 1;
  offShowLoader(btnPage, loader);

  try {
    const data = await getPicturesByQuery(q, page, perPage);
    showImages(data.hits);

    const totalImages = page * perPage;
    if (totalImages >= totalHits) {
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showBtn(btnPage);
    }
    // прокрутка
    const galleryItem = document.querySelector('.gallery-item');
    const itemHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 2,
      left: itemHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    loader.classList.add('is-hidden');
  }
}

// function showLoader(btnPage, loader) {
//   btnPage.classList.remove('is-hidden');
//   loader.classList.add('is-hidden');
// }

function offShowLoader(btnPage, loader) {
  btnPage.classList.add('is-hidden');
  loader.classList.remove('is-hidden');
}

// function offShowBtn(btnPage) {
//   btnPage.classList.add('is-hidden');
// }

function showBtn(btnPage) {
  btnPage.classList.remove('is-hidden');
}
