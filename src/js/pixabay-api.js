import axios from 'axios';
import { showError } from './iziToastHelper.js';

const key = '52494269-f940d25beafa0bafe61525357';
const url = 'https://pixabay.com/api/';
const imagesPerPage = 9;

export function getImagesByQuery(query) {
  return axios.get(url, getParams(query))
    .then(response => {
      const images = response.data.hits;

      if (!images || !images.length) {
        showError('Sorry, there are no images matching your search query. Please try again!');
        return [];
      }

      return images;
    })
    .catch(error => {
      showError(error.message);
      return [];
    });
}

function getParams(query) {
  return {
    params: {
      key: key,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: imagesPerPage,
    },
  };
}
