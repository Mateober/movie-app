import React from 'react';
import { Circle } from '../circle/Circle';
import './movieDetail.scss';

export const MovieDetail = ({ movie }) => {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
    const backdropImageBaseUrl = 'https://image.tmdb.org/t/p/original/';

    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : '';
    const releaseDate = movie.release_date ? movie.release_date : '';
    const genres = movie.genres ? movie.genres.map((genre) => genre.name).join(', ') : '';
    const duration = movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : '';
    const score = movie.vote_average ? movie.vote_average : '';
    const resumen = movie.overview ? movie.overview : '';
    const title = movie.title ? movie.title : '';
    const name = movie.name ? movie.name : '';
    const backdropImage = movie.backdrop_path ? movie.backdrop_path : '';

    const renderImage = () => {
        if (movie.poster_path) {
            return <img src={`${imageBaseUrl}${movie.poster_path}`} alt={title || name} />;
        } else {
            return (
                <div className="noImageDiv">
                    <img src="../assets/noImage.svg" alt="no image" />
                </div>
            );
        }
    };

    return (
        <>
            <div
                className="movieDetailContainer"
                style={{ backgroundImage: `url(${backdropImageBaseUrl}${backdropImage || movie.poster_path})` }}
            >
                <div className="fondo">
                    <div className="movieDetail__image">{renderImage()}</div>
                    <div className="movieDetail">
                        <div className="movieDetail__title">
                            <p className="movieDetail__title--text">
                                {title}
                                <span className="movieDetail__title--year"> ({releaseYear})</span>
                            </p>
                        </div>
                        <div className="movieDetail__info">
                            <p className="movieDetail__info--text">
                                {releaseDate} • {genres} • {duration}
                            </p>
                        </div>
                        <div className="movieDetail__circle">
                            <Circle vote_average={score} />
                        </div>
                        <div className="movieDetail__summary">
                            <p className="movieDetail__summary--title">Resumen</p>
                            <p className="movieDetail__summary--text">{resumen}</p>
                        </div>
                        <p className="movieDetail__score">Puntuación: {score}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
