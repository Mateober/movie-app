import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_KEY } = getEnvVariables();

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = VITE_API_KEY;
const language = 'es-ES';

const apiRequest = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const buildUrl = (category = 'movie', sortby = 'popularity.desc', genre = [], page = 1) => {
    let url = `${apiUrl}/discover/${category}?api_key=${apiKey}&language=${language}&sort_by=${sortby}&page=${page}`;
    if (!genre.length == 0) {
        url += `&with_genres=${genre.join(',')}`;
    }

    if (sortby === 'release_date.desc') {
        const today = new Date();
        const isoDate = today.toISOString().split('T')[0];
        url += `&primary_release_date.lte=${isoDate}`;
    }

    return url;
};

export const getMoviesByCategory = async (category = 'movie', sortby = 'popularity.desc', genre = [], page = 1) => {
    const url = buildUrl(category, sortby, genre, page);
    const data = await apiRequest(url);
    console.log(url);
    return data.results;
};

export const getTotalResults = async (category = 'movie', sortby = 'popularity.desc', genre = [], page = 1) => {
    const url = buildUrl(category, sortby, genre, page);
    const data = await apiRequest(url);
    return data.total_results;
};

export const getGenres = async (category = 'movie') => {
    let url = `${apiUrl}/genre/${category}/list?api_key=${apiKey}&language=${language}`;

    const data = await apiRequest(url);

    return data.genres;
};

export const searchMovies = async (searchTerm, page = 1) => {
    const movieUrl = `${apiUrl}/search/movie?api_key=${apiKey}&query=${searchTerm}&language=${language}&page=${page}`;
    const tvUrl = `${apiUrl}/search/tv?api_key=${apiKey}&query=${searchTerm}&language=${language}&page=${page}`;

    const movieResults = await apiRequest(movieUrl);
    const tvResults = await apiRequest(tvUrl);

    const combinedResults = [...movieResults.results, ...tvResults.results];

    combinedResults.sort((a, b) => b.popularity - a.popularity);

    return combinedResults;
};

export const getTopRatedMovies = async (category = 'movie') => {
    const url = `${apiUrl}/${category}/top_rated?api_key=${apiKey}&language=${language}`;
    const data = await apiRequest(url);
    const topMovies = data.results.slice(0, 10);
    return topMovies;
};

export const getPopularPeople = async () => {
    const url = `${apiUrl}/person/popular?api_key=${apiKey}&language=${language}`;
    const data = await apiRequest(url);

    return data.results;
};
