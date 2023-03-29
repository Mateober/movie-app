import React, { useEffect, useState } from "react";
import { getMoviesByCategory } from "../api/api";
import { MoviesList } from "../components/MoviesList";
import { TopMoviesList } from "../components/TopMoviesList";
import { Loading } from "../ui/Loading/Loading";

export const TvPopularPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTV = async () => {
            const results = await getMoviesByCategory("tv");
            setMovies(results);
            setLoading(false);
        };
        setTimeout(() => {
            getTV();
        }, 1000);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className="container-popular-top">
                <MoviesList movies={movies} />
                <TopMoviesList category={"tv"} />
            </div>
        </>
    );
};
