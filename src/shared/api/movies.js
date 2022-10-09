import axios from "axios";

const API_KEY = '28318b77967fcb148715c1c7fa524b54';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const MOVIE_ID_URL = 'https://api.themoviedb.org/3/movie/';

export async function fetchTrendingMovies(page) {
  try {
    const { data } = await axios.get(
      `${TRENDING_URL}?api_key=${API_KEY}&page=${page}`
    );
        return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovies(query, page) {
  try {
    const { data } = await axios.get(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US&include_adult=false`
    );
        return data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMoviesByID(id) {
  try {
    const { data } = await axios.get(
      `${MOVIE_ID_URL}${id}?api_key=${API_KEY}&language=en-US`
    );
        return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchTrailer(id) {
  try {
    const { data } = await axios.get(
      `${MOVIE_ID_URL}${id}/videos?api_key=${API_KEY}&language=en-US`
    );
        return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchReviews(id) {
    try {
    const { data } = await axios.get(
      `${MOVIE_ID_URL}${id}/reviews?api_key=${API_KEY}&language=en-US`
        );
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchCast(id) {
    try {
    const { data } = await axios.get(
      `${MOVIE_ID_URL}${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        return data;
    } catch (error) {
        console.log(error);
    }
}