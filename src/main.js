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

export const searchForm = document.querySelector('.form');
export const formInput = document.querySelector('.form-input');
export const loader = document.querySelector('.loader');
export const gallery = document.querySelector('.gallery');

loader.style.display = 'none';

searchForm.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
  event.preventDefault();

  const queryValue = formInput.value.toLowerCase().trim();

  if (queryValue === '') {
    iziToast.error({
      message: 'Please complete the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
    return;
  }
  gallery.innerHTML = '';
  showLoader();

  getPicturesByQuery(queryValue)
    .then(data => {
      console.log(data);
      if (!data.hits.length) {
        iziToast.error({
          position: 'topRight',
          maxWidth: '432px',
          backgroundColor: 'red',
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      showImages(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong.',
      });
    })
    .finally(() => {
      offShowLoader();
    });
}

export function showLoader() {
  if (loader) {
    loader.style.display = 'block';
  }
}

function offShowLoader() {
  if (loader) {
    loader.style.display = 'none';
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// gallery.addEventListener('click', handlerGetImages);

// function handlerGetImages(evt) {
//   evt.preventDefault();
//   if (evt.currentTarget === evt.target) {
//     return;
//   }
//   const parent = document.querySelector('.gallery-image');
//   const srcWebformatURL = parent.src;
//   const altTags = parent.alt;

//   const instance = basicLightbox.create(`
//     <div class="modal">
//       <img class="modal-img" src="${srcWebformatURL}" alt="${altTags}" >
//     </div>
//   `);

//   instance.show();
// }
