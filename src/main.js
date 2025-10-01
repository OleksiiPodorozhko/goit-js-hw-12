import { getImagesByQuery } from './js/pixabay-api.js';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  scrollDown,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions.js';
import { refs } from './js/refs.js';
import { showError } from './js/iziToastHelper.js';

let page = 1;
let lastQuery = '';

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  const inputValue = e.target.elements['search-text'].value.trim();
  page = 1;

  if (!inputValue) {
    showError('Please fill in this field!');
    return;
  }

  e.target.reset();
  clearGallery();
  showLoader();
  hideLoadMoreButton();
  lastQuery = inputValue;

  try {
    const { images, isLastPage } = await getImagesByQuery(inputValue, page);
    createGallery(images);
    page++;
    !isLastPage && showLoadMoreButton();
  } finally {
    hideLoader();
  }
});

refs.loadMoreBtn.addEventListener('click', async () => {
  hideLoadMoreButton();
  showLoader();
  try {
    const { images, isLastPage } = await getImagesByQuery(lastQuery, page);
    createGallery(images);
    page++;
    !isLastPage && showLoadMoreButton();
    scrollDown();
  } finally {
    hideLoader();
  }
});
