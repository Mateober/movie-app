import { configureStore } from '@reduxjs/toolkit';
import { moviesSlice } from './movies/moviesSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        auth: authSlice.reducer,
    },
});
