import React, { useEffect, useState } from "react";
import { TopMovieCard } from "./TopMovieCard";

export const TopMoviesList = ({ movies }) => {


    return (
        <div className="container-topmovies animate__animated animate__fadeIn">
            <p className="topmovies-title">TOP PREMIERES</p>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <TopMovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
};
