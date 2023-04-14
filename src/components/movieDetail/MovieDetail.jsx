import React from 'react';
import { Circle } from '../circle/Circle';

export const MovieDetail = ({ movie }) => {
    const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : '';
    const releaseDate = movie.release_date ? movie.release_date : '';
    const genres = movie.genres ? movie.genres.map((genre) => genre.name).join(', ') : '';
    const duration = movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : '';
    const score = movie.vote_average ? movie.vote_average : '';
    const resumen = movie.overview ? movie.overview : '';
    const title = movie.title ? movie.title : '';
    return (
        <>
            <div className="container-movieDetail">
                
                <div className="div1">
                    <p>
                        {title}
                        <span> ({releaseYear})</span>
                    </p>
                </div>
                <div className="div2">
                    <p>
                        {releaseDate} • {genres} • {duration}
                    </p>
                </div>
                <div className="div3">
                    <p className="resumen">Resumen</p>
                    <p className="resumen2">{resumen}</p>
                </div>

                <p>Puntuación: {score}</p>
            </div>
        </>
    );
};
