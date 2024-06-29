import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'; // Import redux-thunk
import { moviesReducer } from '../reducer/reducer';

// Create the store with middleware
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), // Apply redux-thunk middleware
});
