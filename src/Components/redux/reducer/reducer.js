import { ALLMOVIES } from '../types/moviesTypes';

const initialValue = { movies: [], pageCount: 0 }; // Fix the typo here

export const moviesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ALLMOVIES:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state;
  }
};
