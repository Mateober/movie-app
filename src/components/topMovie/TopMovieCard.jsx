import React from 'react';
import './topMovieCard.scss';

export const TopMovieCard = ({ movie }) => {
    const { release_date, first_air_date, poster_path, title, name, vote_average } = movie;

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
    const releaseDate = release_date || first_air_date;
    const formattedRealeaseDate = releaseDate?.substring(0, 4);

    const renderImage = () => {
        if (poster_path) {
            return <img src={`${imageBaseUrl}${poster_path}`} alt={title || name} />;
        } else {
            return (
                <div className="noImageDiv">
                    <img src="../assets/noImage.svg" alt="no image" />
                </div>
            );
        }
    };

    return (
        <div className="topmovie__card">
            <div className="topmovie__image">{renderImage()}</div>
            <div className="topmovie__info">
                <p className="title">{title || name}</p>
                <p className="date">{formattedRealeaseDate}</p>
                <p className="vote">{`${vote_average}/10`}</p>
            </div>
        </div>
    );
};
