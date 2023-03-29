import React, { useEffect, useState } from "react";
import { getMoviesByCategory } from "../api/api";
import { MoviesList } from "../components/MoviesList";
import { TopMoviesList } from "../components/TopMoviesList";
import { Loading } from "../ui/Loading/Loading";

export const MoviesPopularPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            const results = await getMoviesByCategory("movie");
            setMovies(results);
            setLoading(false);
        };
        setTimeout(() => {
            getMovies();
        }, 1000);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className="div-title-page">
                <h1 className="title-page">POPULAR MOVIES</h1>
            </div>

            <div className="container-popular-top">
                <div className="container-movies">
                    <MoviesList movies={movies} />
                </div>

                <TopMoviesList category={"movie"} />
            </div>
        </>
    );
};
