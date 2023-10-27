'use strict';

// add event on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
    for (const elem of elements) {
        elem.addEventListener(eventType, callback);
    }
};

/**
 * store movieId in 'localStorage'
 * when you click movie card
 */

const getMovieDetail = function (movieId) {
    window.localStorage.setItem("movieId", String(movieId));
}