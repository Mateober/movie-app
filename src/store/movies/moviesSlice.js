import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        topMovies: [],
        movieClass: "movie",
        isLoading: false,
        error: null,
    },
    reducers: {
        setMovies: (state, { payload }) => {
            state.movies = payload;
        },
        setTopMovies: (state, { payload }) => {
            state.topMovies = payload;
        },
        setLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        setMovieClass: (state, { payload }) => {
            state.movieClass = payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setMovies, setTopMovies, setLoading, setError, setMovieClass } = moviesSlice.actions;
