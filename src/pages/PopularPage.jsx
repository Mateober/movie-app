import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMoviesByCategory } from "../api/api";
import { MoviesList } from "../components/MoviesList";
import { TopMoviesList } from "../components/TopMoviesList";
import { useMoviesStore } from "../hooks/useMoviesStore";
import { Loading } from "../ui/Loading/Loading";
import { Filter } from "../components/Filter";

export const PopularPage = () => {
    console.log("PopularPage");
    const { movies, topMovies, isLoading, movieClass } = useSelector(
        (state) => state.movies
    );
    const { fetchMoviesByCategory } = useMoviesStore();

    useEffect(() => {
        fetchMoviesByCategory("movie");
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    const categoryTitles = {
        movie: "MOVIES",
        tv: "TV SHOWS",
    };

    const title = categoryTitles[movieClass];

    return (
        <>
            <Filter />
            <div className="div-title-page">
                <h1 className="title-page">POPULAR {title}</h1>
            </div>

            <div className="container-popular-top">
                <div className="container-movies">
                    <MoviesList movies={movies} />
                </div>

                <TopMoviesList movies={topMovies} />
            </div>
        </>
    );
};
