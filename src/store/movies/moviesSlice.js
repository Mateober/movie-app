import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        categoryType: localStorage.getItem('categoryType') || 'movie',
        isLoading: true,
        error: null,
        totalResults: "",
        filters: {
            sort: 'popularity.desc',
            genre: [],
        },
    },
    reducers: {
        setMovies: (state, { payload }) => {
            state.movies = payload;
            state.isLoading = false;
        },
        setMoreMovies: (state, { payload }) => {
            state.movies = [...state.movies, ...payload];
            state.isLoading = false;
        },
        setLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        setCategoryType: (state, { payload }) => {
            state.categoryType = payload;
            localStorage.setItem('categoryType', payload);
        },
        setFilters: (state, { payload }) => {
            state.filters = payload;
        },
        setTotalResults: (state, { payload }) => {
            state.totalResults = payload;
        },
    },
});

export const { setMovies, setMoreMovies, setLoading, setError, setCategoryType, setFilters, setTotalResults } = moviesSlice.actions;
