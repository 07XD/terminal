'use strict';

const api_key = '0a75a5854352757fb8511d390dc55b5b';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam))
    .catch(error => console.error(error));
};

/**
 * movie card
 */
function createMovieCard(movie) {
  const { poster_path, title, vote_average, release_date, id } = movie;

  const movieCard = document.createElement('div');
  movieCard.className = 'movie-card';
  movieCard.dataset.movieId = id;

  const movieImage = document.createElement('div');
  movieImage.className = 'movie-image';

  const img = document.createElement('img');
  img.src = poster_path ? `${imageBaseURL}w342${poster_path}` : 'placeholder.jpg';
  img.alt = title;

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
  ratingText.textContent = vote_average ? vote_average.toFixed(1) : 'N/A';
  rating.appendChild(ratingIcon);
  rating.appendChild(ratingText);
  movieCard.appendChild(rating);

  const year = document.createElement('div');
  year.className = 'year';
  const yearText = document.createElement('span');
  yearText.textContent = release_date ? release_date.slice(0, 4) : 'N/A';
  year.appendChild(yearText);
  movieCard.appendChild(year);

  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  movieCard.appendChild(overlay);

  const movieDetails = document.createElement('div');
  movieDetails.className = 'movie-details';

  const movieTitle = document.createElement('div');
  movieTitle.className = 'title';
  const titleText = document.createElement('h2');
  titleText.textContent = title;
  movieTitle.appendChild(titleText);

  movieDetails.appendChild(movieTitle);

  movieCard.appendChild(movieDetails);

  // Agregar evento de clic a la tarjeta
  movieCard.addEventListener('click', () => {
    // Redirigir a la página de la película
    const slug = getSlug(title);
    const movieId = id;
    window.location.href = `../movie/${movieId}-${slug}`;
    // guardar elid de la película en el almacenamiento local para su uso en la página de detalles
    localStorage.setItem('movieId', movieId);
  });

  return movieCard;
}

/**
 * Generar el slug de una cadena de texto
 * @param {string} title - El título de la película
 * @returns {string} El slug generado
 */
function getSlug(title) {
  const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
  return slug;
}

// Show the details of the selected movie

// const url = window.location.href;
// const movieId = url.split("/").pop().split("-")[0];
const currentPage = new URL(window.location.href)
const movieId = currentPage.searchParams.get("id")
const movieDetailElement = document.querySelector('.movie-detail');

const getGenres = function (genreList) {
  let newGenreList = [];
  for (const { name } of genreList) {
    newGenreList.push(name);
  }
  return newGenreList.join(', ');
};

const getCasts = function (castList) {
  let newCastList = [];
  for (const { name } of castList) {
    newCastList.push(name);
  }
  return newCastList.join(', ');
};

const getDirectors = function (crewList) {
  const directors = crewList.filter(({ job }) => job === 'Director');
  const directorList = [];
  for (const { name } of directors) {
    directorList.push(name);
  }
  return directorList.join(', ');
};

const filterVideos = function (videoList) {
  return videoList.filter(({ type, site }) => (type === 'Trailer' || type === 'Teaser') && site === 'YouTube');
};

fetchDataFromServer(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=casts,videos,images,releases`, function (movie) {
  const {
    backdrop_path,
    poster_path,
    title,
    release_date,
    runtime,
    vote_average,
    releases: { countries: [{ certification }] },
    genres,
    overview,
    casts: { cast, crew },
    videos: { results: videos }
  } = movie;

  document.title = `${title} - demo`;

  const movieDetailElement = document.createElement('div');
  movieDetailElement.classList.add('movie-detail');

  movieDetailElement.innerHTML = `
    <div class="backdrop-image" style="background-image: url('${imageBaseURL}w1280${backdrop_path || poster_path}');"></div>
    <figure class="poster-box movie-poster">
      <img src="${imageBaseURL}w342${poster_path}" alt="${title} poster" class="img-cover">
    </figure>
    <div class="detail-box">
      <div class="detail-content">
        <h1 class="heading">${title}</h1>
        <div class="meta-list">
          <div class="meta-item">
            <img src="../assets/images/star.png" width="20" height="20" alt="rating">
            <span class="span">${vote_average.toFixed(1)}</span>
          </div>
          <div class="separator"></div>
          <div class="meta-item">${runtime}m</div>
          <div class="separator"></div>
          <div class="meta-item">${release_date.split('-')[0]}</div>
          <div class="meta-item card-badge">${certification}</div>
        </div>
        <p class="genre">${getGenres(genres)}</p>
        <p class="overview">${overview}</p>
        <ul class="detail-list">
          <li class="list-item">
            <p class="list-name">Starring</p>
            <p>${getCasts(cast)}</p>
          </li>
          <li class="list-item">
            <p class="list-name">Directed By</p>
            <p>${getDirectors(crew)}</p>
          </li>
        </ul>
      </div>
      <div class="title-wrapper">
        <h3 class="title-large">Trailers and Clips</h3>
      </div>
      <div class="slider-list">
        <div class="slider-inner"></div>
      </div>
    </div>
  `;

  for (const { key, name } of filterVideos(videos)) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.innerHTML = `
      <iframe width="560" height="294" src="https://www.youtube.com/embed/${key}?&theme=dark&color=white&rel=0" frameborder="0" allowfullscreen="1" title="${name}" class="img-cover" loading="lazy"></iframe>
    `;
    movieDetailElement.querySelector('.slider-inner').appendChild(videoCard);
  }

  const pageContent = document.getElementById('page-content');
  pageContent.appendChild(movieDetailElement);

  // Get similar movies based on the title
  fetchDataFromServer(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURIComponent(title.split(':')[0])}`, function (similarMoviesByTitle) {
    // Get similar movies based on the company of the movie
    fetchDataFromServer(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_companies=${movie.production_companies.map(({ id }) => id).join(',')}&sort_by=popularity.desc`, function (similarMoviesByCompany) {


      const allSimilarMovies = [
        ...similarMoviesByTitle.results,

        ...similarMoviesByCompany.results
      ];
      addSimilarMovies(allSimilarMovies, 'Similar Movies', pageContent);
    });
  });
});

function addSimilarMovies(movieList, title, pageContent) {
  const uniqueMovies = [...new Map(movieList.map(movie => [movie.id, movie])).values()]; // Remove duplicates by movie ID

  const sectionElement = document.createElement('div');
  sectionElement.classList.add('similar-section');
  sectionElement.innerHTML = `
    <div class="title-wrapper">
      <h3 class="title-large">${title}</h3>
    </div>
    <div class="slider-list">
    <div class="similar-movies"></div>
    </div>
  `;

  const similarMoviesElement = sectionElement.querySelector('.similar-movies');

  for (const movie of uniqueMovies) {
    const movieCard = createMovieCard(movie);
    similarMoviesElement.appendChild(movieCard);
  }

  pageContent.appendChild(sectionElement);
}