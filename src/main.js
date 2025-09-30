import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader, hideLoadMore,
  showLoader, showLoadMore,
} from './js/render-functions.js';
import { refs } from './js/refs.js';

let page = 1;
let lastQuery = '';

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  const inputValue = e.target.elements['search-text'].value.trim();

  if (!inputValue) return;

  e.target.reset();
  clearGallery();
  showLoader();
  hideLoadMore();
  lastQuery = inputValue;

  try {
    const images = await getImagesByQuery(inputValue, page);
    createGallery(images);
    page++;
    showLoadMore();
  } finally {
    hideLoader();
  }
});

refs.loadMoreBtn.addEventListener('click', async () => {
  hideLoadMore();
  showLoader();
  try {
    const images = await getImagesByQuery(lastQuery, page);
    createGallery(images);
    page++;
    showLoadMore();
  } finally {
    hideLoader();
  }
});
