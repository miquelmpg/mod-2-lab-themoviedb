import axios from "axios";

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
const postersBaseUrl = import.meta.env.VITE_TMDB_BASE_IMAGES_URL;

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
export const listMovies = (params = {}) => {
}

/**
 * Get TMDB movie details by identifier
 * docs: https://developer.themoviedb.org/reference/movie-details
 * pro tip: you can combine movie details with videos and recommendations and perform all http request with Promise.all([])
 * @param {*} id      - Movie identifier
 * @returns {Object}
 */
export const getMovie = (id) => {
}
