import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        topMovies: [],
        categoryType: "movie",
        isLoading: true,
        error: null,
        filters: {
            sort: "popularity.desc",
            genre: [],
        },
    },
    reducers: {
        setMovies: (state, { payload }) => {
            state.movies = payload;
            state.isLoading = false;
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
        setCategoryType: (state, { payload }) => {
            state.categoryType = payload;
        },
        setFilters: (state, { payload }) => {
            state.filters = payload;
        },
    },
});

export const {
    setMovies,
    setTopMovies,
    setLoading,
    setError,
    setCategoryType,
    setFilters,
} = moviesSlice.actions;
