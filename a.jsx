import React, { useEffect, useState } from "react";
import {
    getMoviesByCategory,
    searchMovies,
    getTopRatedMovies,
} from "../api/api";
import { MoviesList } from "../components/MoviesList";
import Navbar from "../ui/Navbar/Navbar";

export const TvPopularPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        handleCategory();
    }, []);

    const handleSearch = async (event) => {
        event.preventDefault();
        const results = await searchMovies(searchTerm);
        setMovies(results);
    };

    const handleCategory = async (category) => {
        const results = await getMoviesByCategory(category);
        setMovies(results);
    };

    const handleTopRated = async () => {
        const results = await getTopRatedMovies();
        setMovies(results);
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <button type="submit" className="search-button">
                    Buscar
                </button>
            </form>

            <button onClick={() => handleCategory("movie")}>
                Películas populares
            </button>
            <button onClick={() => handleCategory("tv")}>
                Series populares
            </button>
            <button onClick={handleTopRated}>
                Mejores películas valoradas
            </button>
            <MoviesList movies={movies}/>
        </div>
    );
};