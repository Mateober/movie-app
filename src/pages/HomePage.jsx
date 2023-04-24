import React, { useEffect, useState } from 'react';
import { MovieListHome } from '../components/home/MovieListHome';
import { getHomeMovies } from '../api/api';

export const HomePage = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedTv, setTopRatedTv] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTv, setPopularTv] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            setTopRatedMovies(await getHomeMovies('movie', 'top_rated'));
            setTopRatedTv(await getHomeMovies('tv', 'top_rated'));
            setPopularMovies(await getHomeMovies('movie', 'popular'));
            setPopularTv(await getHomeMovies('tv', 'popular'));
            setUpcomingMovies(await getHomeMovies('movie', 'upcoming'));
        };
        fetchMovies();
    }, []);

    const listType = [
        { title: 'POPULAR MOVIES', moviesArray: popularMovies },
        { title: 'POPULAR TV SHOWS', moviesArray: popularTv },
        { title: 'TOP RATED MOVIES', moviesArray: topRatedMovies },
        { title: 'TOP RATED TV SHOWS', moviesArray: topRatedTv },
    ];

    return (
        <div className="containerHome">
            {listType.map((list) => (
                <>
                    <div className='home__title'>
                        <h2 className="list__title">{list.title}</h2>
                        {list.title === 'POPULAR MOVIES' ? <p className="vermashome">Ver mas...</p> : ''}
                        {list.title === 'POPULAR TV SHOWS' ? <p className="vermashome">Ver mas...</p> : ''}
                    </div>

                    <MovieListHome key={list.title} moviesArray={list.moviesArray} title={list.title} />
                </>
            ))}
        </div>
    );
};
