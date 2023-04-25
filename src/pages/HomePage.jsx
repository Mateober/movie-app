import React, { useEffect, useState } from 'react';
import { MovieListHome } from '../components/home/MovieListHome';
import { getHomeMovies } from '../api/api';
import { Loading } from '../ui/Loading/Loading';

export const HomePage = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedTv, setTopRatedTv] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTv, setPopularTv] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setTopRatedMovies(await getHomeMovies('movie', 'top_rated'));
            setTopRatedTv(await getHomeMovies('tv', 'top_rated'));
            setPopularMovies(await getHomeMovies('movie', 'popular'));
            setPopularTv(await getHomeMovies('tv', 'popular'));
            setUpcomingMovies(await getHomeMovies('movie', 'upcoming'));
            setIsLoading(false);
        };
        fetchMovies();
    }, []);

    const listType = [
        { title: 'POPULAR MOVIES', moviesArray: popularMovies, id: 1 },
        { title: 'POPULAR TV SHOWS', moviesArray: popularTv, id: 2 },
        { title: 'TOP RATED MOVIES', moviesArray: topRatedMovies, id: 3 },
        { title: 'TOP RATED TV SHOWS', moviesArray: topRatedTv, id: 4 },
    ];

    return isLoading ? (
        <Loading />
    ) : (
        <div className="containerHome">
            {listType.map((list) => (
                <>
                    <div className="home__title">
                        <h2 className="list__title">{list.title}</h2>
                        {list.title === 'POPULAR MOVIES' ? <p className="vermashome">Ver mas...</p> : ''}
                        {list.title === 'POPULAR TV SHOWS' ? <p className="vermashome">Ver mas...</p> : ''}
                    </div>

                    <MovieListHome key={list.id} moviesArray={list.moviesArray} />
                </>
            ))}
        </div>
    );
};
