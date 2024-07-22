import { gallery } from '../main';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export function showImages(arr) {
  const markup = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a class="gallery-link"
        href="${largeImageURL}"> 
        <img class="gallery-image"
        src="${webformatURL}" 
        alt="${tags}  
        width="360" 
        height="200""/>
        </a>
        <ul class = "gallery">
          <li>
            <h3>likes</h3>
            <p>${likes}</p>
          </li>
          <li>
            <h3>views</h3>
            <p>${views}</p>
          </li>
          <li>
            <h3>comments</h3>
            <p>${comments}</p>
          </li>
          <li>
            <h3>downloads</h3>
            <p>${downloads}</p>
          </li>
        </ul>
      
      </li>`;
      }
    )
    .join('');
  gallery.innerHTML = markup;
  lightbox.refresh();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
