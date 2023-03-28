import React from "react";
import "./topMovieCard.scss";

export const TopMovieCard = ({ movie }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    return (
        <div className="topmovie__card">
            <div className="topmovie__image">
                {movie.poster_path ? (
                    <img
                        src={imageBaseUrl + movie.poster_path}
                        alt={movie.title}
                    />
                ) : (
                    <div className="noImageDiv">
                        <img src="../assets/noImage.svg" alt="no image" />
                    </div>
                )}
            </div>
            <div className="topmovie__info">
                <p>{movie.title}</p>
                <p className="date">{movie.release_date.substring(0, 4)}</p>
                <p className="vote">{movie.vote_average}/10</p>
            </div>
        </div>
    );
};
