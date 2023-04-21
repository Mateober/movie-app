import React from 'react';
import { Circle } from '../circle/Circle';
import './movieDetail.scss';
import { ActorsCard } from './ActorsCard';

export const MovieDetail = ({ movie }) => {
    const { details, actors } = movie;
    const {
        genres,
        runtime,
        release_date,
        first_air_date,
        vote_average,
        title,
        name,
        backdrop_path,
        number_of_seasons,
        poster_path,
        overview,
    } = details;

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
    const backdropImageBaseUrl = 'https://image.tmdb.org/t/p/original/';

    const releaseYear = new Date(release_date).getFullYear() || new Date(first_air_date).getFullYear();
    const genresList = genres ? genres.map((genre) => genre.name).join(', ') : '';
    const duration = runtime ? `${Math.floor(runtime / 60)}h ${runtime % 60}m` : '';
    const releaseDate = release_date || '';
    const score = vote_average || '';
    const resumen = overview || '';
    const titleOrName = title || name;
    const backdropImage = backdrop_path || '';
    const seasons = number_of_seasons || '';
    const posterPath = poster_path || '';

    const renderImage = () => {
        if (posterPath) {
            return <img src={`${imageBaseUrl}${posterPath}`} alt={titleOrName} />;
        } else {
            return (
                <div className="noImageDiv">
                    <img src="../../assets/noImage.svg" alt="no image" />
                </div>
            );
        }
    };

    return (
        <>
            <div
                className="movieDetailContainer"
                style={{ backgroundImage: `url(${backdropImageBaseUrl}${backdropImage || posterPath})` }}
            >
                <div className="movieDetailContainer-black">
                    <div className="movie__image">{renderImage()}</div>
                    <div className="movieDetail">
                        <div className="movieDetail__title">
                            <p>
                                {titleOrName}
                                <span> ({releaseYear})</span>
                            </p>
                        </div>
                        <div className="movieDetail__info">
                            <p>{[releaseDate, genresList, duration].filter(Boolean).join(' • ')}</p>
                            {seasons && (
                                <p>
                                    {seasons} {seasons === 1 ? 'Temporada' : 'Temporadas'}
                                </p>
                            )}
                        </div>
                        <div className="movieDetail__circle">
                            <Circle vote_average={score} />
                            <p className="movieDetail__circle--text">Puntuación de usuario</p>
                        </div>
                        <div className="movieDetail__resumen">
                            {resumen && (
                                <>
                                    <h3>Resumen</h3>
                                    <p>{resumen}</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="actorsContainer">
                <h2>Actores Principales:</h2>
                <ul className="actorsUl">
                    {actors.cast.slice(0, 20).map((actor) => (
                        <li key={actor.id} className="actorCard">
                            <ActorsCard actor={actor} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
