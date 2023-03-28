import React, { useEffect, useState } from "react";
import { getMoviesByCategory } from "../api/api";
import { MoviesList } from "../components/MoviesList";
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
        getTV();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return <MoviesList movies={movies} />;
};
