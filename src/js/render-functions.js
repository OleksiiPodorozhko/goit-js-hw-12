import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs.js';

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

export function createGallery(images) {
  const markup =
    images
      .map(
        image =>
          `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${image.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${image.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${image.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${image.downloads}</p>
            </li>
           </ul>
       </li>`
      )
      .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  refs.loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  refs.loadMoreBtn.classList.add('hidden');
}

export function scrollDown() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}