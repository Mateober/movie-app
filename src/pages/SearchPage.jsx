import React, { useState, useEffect } from "react";
import { searchMovies } from "../api/api";
import { MoviesList } from "../components/MoviesList";
import { useParams } from "react-router-dom";
import { Loading } from "../ui/Loading/Loading";

export const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { searchTerm } = useParams();

    useEffect(() => {
        const search = async () => {
            const results = await searchMovies(searchTerm);
            setMovies(results);
            setLoading(false);
        };
        search();
    }, [searchTerm]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {movies.length === 0 ? (
                <p>NO HAY PELICULAS</p>
            ) : (
                <MoviesList movies={movies} />
            )}
        </>
    );
};
