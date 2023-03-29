import React, { useState, useEffect } from "react";
import { searchMovies } from "../api/api";
import { useParams } from "react-router-dom";
import { Loading } from "../ui/Loading/Loading";
import { MoviesList } from "../components/MoviesList";

export const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { searchTerm } = useParams();
    useEffect(() => {
        const search = async () => {
            setLoading(true);
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
            <div className="div-title-page">
                <h1 className="title-page">RESULTS FOR {searchTerm}</h1>
            </div>

            {movies.length === 0 ? (
                <p>NO HAY PELICULAS</p>
            ) : (
                <div className="container-movies-search">
                    <MoviesList movies={movies} />
                </div>
            )}
        </>
    );
};
