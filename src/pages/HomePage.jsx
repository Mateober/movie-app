import React, { useEffect, useState } from 'react';
import { MovieListHome } from '../components/home/MovieListHome';
import { getHomeMovies } from '../api/api';
import { Loading } from '../ui/Loading/Loading';
import { CarouselHome } from '../components/home/CarouselHome';
import { useMoviesStore } from '../hooks/useMoviesStore';
import { Link } from 'react-router-dom';

import { windowScrollUp } from '../helpers/windowScrollUp';

export const HomePage = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [topRatedTv, setTopRatedTv] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTv, setPopularTv] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            setTopRatedMovies(await getHomeMovies('movie', 'top_rated'));
            setTopRatedTv(await getHomeMovies('tv', 'top_rated'));
            setPopularMovies(await getHomeMovies('movie', 'popular'));
            setPopularTv(await getHomeMovies('tv', 'popular'));
            setIsLoading(false);
        };
        fetchMovies();
    }, []);

    const listType = [
        { type: 'movie', title: 'POPULAR MOVIES', moviesArray: popularMovies, id: 1 },
        { type: 'tv', title: 'POPULAR TV SHOWS', moviesArray: popularTv, id: 2 },
        { type: 'movie', title: 'TOP RATED MOVIES', moviesArray: topRatedMovies, id: 3 },
        { type: 'tv', title: 'TOP RATED TV SHOWS', moviesArray: topRatedTv, id: 4 },
    ];

    const { useSetCategoryType } = useMoviesStore();

    const onClickVerMas = (categoryType) => {
        useSetCategoryType(categoryType);
        windowScrollUp();
    };

    return isLoading ? (
        <Loading />
    ) : (
        <div>
            <CarouselHome movies={popularMovies.slice(0, 5)} />

            <div className="containerHome">
                {listType.map((list) => (
                    <div key={list.id} className='containerlist'>
                        <div className="home__title">
                            <h2 className="list__title">{list.title}</h2>
                            {list.title === 'POPULAR MOVIES' && (
                                <Link to={`/show/movie`} onClick={() => { onClickVerMas('movie'); }}>See more...</Link>
                            )}
                            {list.title === 'POPULAR TV SHOWS' && (
                                <Link to={`/show/tv`} onClick={() => { onClickVerMas('tv'); }}>See more...</Link>
                            )}
                        </div>

                        <MovieListHome key={list.id} moviesArray={list.moviesArray} type={list.type} />
                    </div>
                ))}
            </div>
        </div>
    );
};
