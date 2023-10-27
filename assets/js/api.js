'use strict';

const api_key = '0a75a5854352757fb8511d390dc55b5b';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data.results) {
        callback(data.results, optionalParam);
      } else {
        console.error('Movie data not found.');
      }
    })
    .catch(error => console.error(error));
};

export { imageBaseURL, api_key, fetchDataFromServer };
