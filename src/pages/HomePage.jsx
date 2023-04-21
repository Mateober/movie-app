import React, { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../api/api';
import '../components/home/home.scss';

export const HomePage = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            const data = await getTopRatedMovies('movie');
            setTopRatedMovies(data);
        };
        fetchTopRatedMovies();
    }, []);

    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    return (
        <div className="containerHome">
            <div className="list">
                <h2>TOP 10 MOVIES</h2>
                <ul className='homeUl'>
                    {topRatedMovies.map((movie) => (
                        <li key={movie.id}>
                            <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title || movie.name} />
                            <p>{movie.title || movie.name}</p>{' '}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
