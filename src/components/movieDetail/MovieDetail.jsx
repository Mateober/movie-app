import React from 'react';
import { Circle } from '../circle/Circle';
import './movieDetail.scss';
import { ActorsCard } from './ActorsCard';

export const MovieDetail = ({ movie }) => {
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
    const backdropImageBaseUrl = 'https://image.tmdb.org/t/p/original/';

    const releaseYear = movie.details.release_date ? new Date(movie.details.release_date).getFullYear() : '';
    const releaseDate = movie.details.release_date ? movie.details.release_date : '';
    const genres = movie.details.genres ? movie.details.genres.map((genre) => genre.name).join(', ') : '';
    const duration = movie.details.runtime ? `${Math.floor(movie.details.runtime / 60)}h ${movie.details.runtime % 60}m` : '';
    const score = movie.details.vote_average ? movie.details.vote_average : '';
    const resumen = movie.details.overview ? movie.details.overview : '';
    const title = movie.details.title ? movie.details.title : '';
    const name = movie.details.name ? movie.details.name : '';
    const backdropImage = movie.details.backdrop_path ? movie.details.backdrop_path : '';

    const renderImage = () => {
        if (movie.details.poster_path) {
            return <img src={`${imageBaseUrl}${movie.details.poster_path}`} alt={title || name} />;
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
                style={{ backgroundImage: `url(${backdropImageBaseUrl}${backdropImage || movie.details.poster_path})` }}
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
                    </div>
                </div>
            </div>
            <div className="actorsContainer">
                <h2>Actores Principales:</h2>
                <ul className='actorsUl'>
                    {movie.actors.cast.slice(0, 20).map((actor) => (
                        <li key={actor.id} className="actorCard">
                            <ActorsCard actor={actor} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
