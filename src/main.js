import { getPicturesByQuery } from './js/pixabay-api';
import { showImages } from './js/render-functions';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

export const searchForm = document.querySelector('.form');
export const formInput = document.querySelector('.form-input');
export const loader = document.querySelector('.loader');
export const gallery = document.querySelector('.gallery');
export const btnPage = document.querySelector('.btn-page');

let q = '';
let page = 1;
const perPage = 15;
let totalHits = 0;
//const hiddenClass = 'is-hidden';

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
  offShowLoader();

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
      lightbox.refresh();

      if (data.hits.length < totalHits) {
        showBtn();
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

export function showLoader(btnPage, loader) {
  btnPage.classList.remove('is-hidden');
  loader.classList.add('is-hidden');
}

export function offShowLoader(btnPage, loader) {
  btnPage.classList.add('is-hidden');
  loader.classList.remove('is-hidden');
}

export function offShowBtn(btnPage) {
  btnPage.classList.add('is-hidden');
}

export function showBtn(btnPage) {
  btnPage.classList.remove('is-hidden');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

btnPage.addEventListener('click', showMorePage);

async function showMorePage() {
  page += 1;
  offShowLoader();

  try {
    const data = await fetchImages(q, page, perPage);
    showImages(data.hits);

    const totalImages = page * perPage;
    if (totalImages >= totalHits) {
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showBtn();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    loader.classList.add('is-hidden');
  }
}
