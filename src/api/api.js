import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "327298bc06eb4df81d5e95139069ec51";
const language = "es-ES";

const apiRequest = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getMoviesByCategory = async (category = "movie") => {
    const url = `${apiUrl}/${category}/popular?api_key=${apiKey}&language=${language}`;
    return apiRequest(url).then((data) => data.results);
};

export const searchMovies = async (searchTerm) => {
    const movieUrl = `${apiUrl}/search/movie?api_key=${apiKey}&query=${searchTerm}&language=${language}&include_adult=false&page=1`;
    const tvUrl = `${apiUrl}/search/tv?api_key=${apiKey}&query=${searchTerm}&language=${language}&include_adult=false&page=1`;

    const movieResults = await apiRequest(movieUrl);
    const tvResults = await apiRequest(tvUrl);

    const combinedResults = [...movieResults.results, ...tvResults.results];

    combinedResults.sort((a, b) => b.popularity - a.popularity);

    return combinedResults;
};

export const getTopRatedMovies = async (category = "movie") => {
    const url = `${apiUrl}/${category}/top_rated?api_key=${apiKey}&language=${language}`;
    const data = await apiRequest(url);
    const topMovies = data.results.slice(0, 10);
    return topMovies;
};

export const getPopularPeople = async () => {
    const url = `${apiUrl}/person/popular?api_key=${apiKey}&language=${language}`;
    return apiRequest(url).then((data) => data.results);
};
