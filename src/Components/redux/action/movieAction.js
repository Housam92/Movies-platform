// src/redux/actions/movieActions.js
import axios from 'axios';
import { ALLMOVIES } from '../types/moviesTypes';

export const getAllMovie = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key:'77ec7569ac0407ea0edb84002ee1b42b',
          language: 'en-US',
        },
      });
      dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages });
    } catch (error) {
      // Handle the error, e.g., dispatch an error action or log it
      console.error("Error in getAllMovie:", error);
    }
  };
};

export const getMovieSearch = (word) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                    api_key: '77ec7569ac0407ea0edb84002ee1b42b',
                    query: word,
                    language: 'en',
                }
            });
            dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages });
        } catch (error) {
            // Handle the error, e.g., dispatch an error action or log it
            console.error("Error in getMovieSearch:", error);
        }
    };
}

export const getPage = (page) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
                params: {
                    api_key: '77ec7569ac0407ea0edb84002ee1b42b',
                    language: 'en-US',
                    page: page,
                }
            });
            dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages });
        } catch (error) {
            // Handle the error, e.g., dispatch an error action or log it
            console.error("Error in getPage:", error);
        }
    };
}
