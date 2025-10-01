import axios from 'axios';
import { showError, showInfo } from './iziToastHelper.js';

const key = '52494269-f940d25beafa0bafe61525357';
const url = 'https://pixabay.com/api/';
const perPage = 15;

export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get(url, getParams(query, page));
    const images = response.data.hits;

    if (!images || !images.length) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return { images: [], isLastPage: true };
    }

    const isLastPage = getIsLastPage(response.data.totalHits, page);

    if (isLastPage) {
      showInfo('You have reached the end of the gallery!');
    }

    return { images: images, isLastPage: isLastPage };
  } catch (error) {
    showError(error.message);
    return { images: [], isLastPage: true };
  }
}

function getParams(query, page) {
  return {
    params: {
      key: key,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: page,
    },
  };
}

function getIsLastPage(totalHits, page) {
  const total_pages = Math.ceil(totalHits / perPage);
  return page >= total_pages;
}