import { imageBaseURL } from './api.js';

/**
 * Función para crear una tarjeta de película
 */
export function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.className = 'movie-card';
  movieCard.dataset.movieId = movie.id; // Establecer el ID de la película en el atributo de datos

  const movieImage = document.createElement('div');
  movieImage.className = 'movie-image';

  const img = document.createElement('img');
  img.src = movie.poster_path ? `${imageBaseURL}w342${movie.poster_path}` : 'placeholder.jpg';
  img.alt = movie.title;

  movieImage.appendChild(img);
  movieCard.appendChild(movieImage);

  const favorite = document.createElement('div');
  favorite.className = 'favorite';
  const favoriteIcon = document.createElement('i');
  favoriteIcon.className = 'bx bx-heart';
  favorite.appendChild(favoriteIcon);
  movieCard.appendChild(favorite);

  const watchedButton = document.createElement('div');
  watchedButton.className = 'watched';
  const watchedIcon = document.createElement('i');
  watchedIcon.className = 'bx bx-show';
  watchedButton.appendChild(watchedIcon);
  movieCard.appendChild(watchedButton);

  const rating = document.createElement('div');
  rating.className = 'rating';
  const ratingIcon = document.createElement('i');
  ratingIcon.className = 'bx bx-star';
  const ratingText = document.createElement('span');
  ratingText.textContent = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
  rating.appendChild(ratingIcon);
  rating.appendChild(ratingText);
  movieCard.appendChild(rating);

  const year = document.createElement('div');
  year.className = 'year';
  const yearText = document.createElement('span');
  yearText.textContent = movie.release_date ? movie.release_date.slice(0, 4) : 'N/A';
  year.appendChild(yearText);
  movieCard.appendChild(year);

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  movieCard.appendChild(overlay);

  const movieDetails = document.createElement('div');
  movieDetails.className = 'movie-details';

  const title = document.createElement('div');
  title.className = 'title';
  const titleText = document.createElement('h2');
  titleText.textContent = movie.title;
  title.appendChild(titleText);

  movieDetails.appendChild(title);

  movieCard.appendChild(movieDetails);

  // Agregar evento de clic a la tarjeta
  movieCard.addEventListener('click', () => {
    // Redirigir a la página de la película
    const slug = getSlug(movie.title);
    const movieId = movie.id;
    window.location.href = `./movie/${movieId}-${slug}`;
    // hacer que se guarde el id de la pelicula en el local storage para ser usado en la pagina de detalle
    localStorage.setItem('movieId', movieId);
    

  });

  return movieCard;
}

/**
 * Generar el slug de una cadena de texto
 * @param {string} title - El título de la película
 * @returns {string} El slug generado
 */
export function getSlug(title) {
  const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
  return slug;
}
