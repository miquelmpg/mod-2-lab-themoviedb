import axios from "axios";

const LOCAL_STORAGE_KEY = 'favoriteMovies-db';

export let favoriteMovies = localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : [];

export const store = () => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favoriteMovies));

const http = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
});

http.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
);

// Movies returned by the discover endpoint do not include the full poster URL.
// You must parse each movie and build the poster URL by combining:
// `${postersBaseUrl}${movie.poster_path}`
export const postersBaseUrl = import.meta.env.VITE_TMDB_BASE_IMAGES_URL;
export const YoutubeBaseUrl = 'https://www.youtube.com/embed/';

/**
 * Discovery TMDB movies
 * docs: https://developer.themoviedb.org/reference/discover-movie
 * @param {Object} params                 - Discover movies query parameters
 * @param {Number} params.genre           - Genre of the target movies.
 * @param {String} params.sortBy          - DESC Allowed: rating
 * @param {String} params.fromReleaseDate - YYYY-MM-DD date GTE movies release date.
 * @param {Number} params.limit           - Limit the amount of movies (min:1 max:20).
 * @returns {Object[]}
 */
export const listMovies = async  (params = {}) => {
  const { genre, sortBy, fromReleaseDate, limit } = params;
  try {
    const list = await http.get(`/discover/movie?with_genres=${genre}&sort_by=${sortBy}.desc&release_date=${fromReleaseDate}&language=es-ES`);
    return list.results.slice(0, limit);
  } catch (error) {
    console.log('An error has occurred obtaining list data', error);
  }
}

export const listMoviesBySearch = async  (word) => {
  try {
    const list = await http.get(`/search/movie?query=${word}`);
    console.log(list)
    return list.results;
  } catch (error) {
    console.log('An error has occurred obtaining list data', error);
  }
}

/**
 * Get TMDB movie details by identifier
 * docs: https://developer.themoviedb.org/reference/movie-details
 * pro tip: you can combine movie details with videos and recommendations and perform all http request with Promise.all([])
 * @param {*} id      - Movie identifier
 * @returns {Object}
 */
  export const getMovie = async (movie_id) => {
    try {
      const movie = await http.get(`/movie/${movie_id}`);
      return movie;
    } catch (error) {
      console.log('An error has occurred obtaining the movie data', error);
    }
}

export const getTrailers = async (movie_id) => {
  try {
    const trailer = await http.get(`/movie/${movie_id}/videos`);
    return trailer.results.slice(0, 2);
  } catch (errors) {
    console.log('An error has occurred obtaining trailers', error);
  }
}

export const getRecommendation = async (movie_id) => {
  try {
    const recommendation = await http.get(`/movie/${movie_id}/recommendations`);
    return recommendation.results;
  } catch (errors) {
    console.log('An error has occurred obtaining recommendations', error);
  }
}