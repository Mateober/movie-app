import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "../api/api";
import { Loading } from "../ui/Loading/Loading";
import { TopMovieCard } from "./TopMovieCard";

export const TopMoviesList = ({ movie }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovies = async () => {
            const results = await getTopRatedMovies("movie");
            setMovies(results);
            setLoading(false);
        };
        getMovies();
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <div className="container-topmovies">
            <p className="topmovies-title">TOP PREMIERES</p>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <TopMovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
};
