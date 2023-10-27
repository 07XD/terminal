'use strict';

import { api_key, fetchDataFromServer } from './api.js';
import { createMovieCard, getSlug } from './movie-card.js';

const containerMovies = document.querySelector(".container-movies");
const loadMoreButton = document.querySelector(".load-more-button");
let currentPage = 1;

// Variable para almacenar las películas mostradas
const displayedMovies = new Set();

/**
 * Obtener los datos de las películas
 */
function getMovies() {
  const homePageSections = [
    { title: "Upcoming Movies", path: "/movie/upcoming" },
    { title: "Weekly Trending Movies", path: "/trending/movie/week" },
    { title: "Top Rated Movies", path: "/movie/top_rated" }
  ];

  const promises = homePageSections.map(({ title, path }) => {
    return new Promise((resolve, reject) => {
      fetchDataFromServer(
        `https://api.themoviedb.org/3${path}?api_key=${api_key}&page=${currentPage}`,
        (movieList) => {
          // Filtrar las películas que no han sido mostradas previamente
          const filteredMovies = movieList.filter(movie => !displayedMovies.has(movie.id));

          for (const movie of filteredMovies) {
            const movieCard = createMovieCard(movie);
            containerMovies.appendChild(movieCard);
            displayedMovies.add(movie.id);
          }
          resolve();
        },
        reject
      );
    });
  });

  Promise.all(promises)
    .then(() => {
      // Todos los datos se han cargado correctamente
    })
    .catch((error) => {
      // Manejar cualquier error ocurrido durante la carga de datos
      console.log(error);
    });
}

/**
 * Cargar más películas cuando se llega al final de la página
 */
function loadMoreMovies() {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    currentPage++;
    getMovies();
  }
}

// Agregar evento al desplazamiento de la ventana
window.addEventListener('scroll', loadMoreMovies);

// Llamar a la función para obtener los datos de las películas y mostrar las tarjetas
getMovies();
