import React, { useEffect, useState } from 'react';
import { MovieListHome } from '../components/home/MovieListHome';
import { getHomeMovies } from '../api/api';
import { Loading } from '../ui/Loading/Loading';
import { CarouselHome } from '../components/home/CarouselHome';
import { useMoviesStore } from '../hooks/useMoviesStore';
import { Link } from 'react-router-dom';

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
        { type: 'movie', title: 'POPULAR MOVIES', moviesArray: popularMovies, id: 1 },
        { type: 'tv', title: 'POPULAR TV SHOWS', moviesArray: popularTv, id: 2 },
        { type: 'movie', title: 'TOP RATED MOVIES', moviesArray: topRatedMovies, id: 3 },
        { type: 'tv', title: 'TOP RATED TV SHOWS', moviesArray: topRatedTv, id: 4 },
    ];

    const { useSetCategoryType } = useMoviesStore();

    const verMas = (categoryType) => {
        useSetCategoryType(categoryType);
    };

    return isLoading ? (
        <Loading />
    ) : (
        <div>
            <CarouselHome movies={popularMovies.slice(0, 5)} />

            <div className="containerHome">
                {listType.map((list) => (
                    <>
                        <div className="home__title">
                            <h2 className="list__title">{list.title}</h2>
                            {list.title === 'POPULAR MOVIES' ? (
                                <Link
                                    to={`/show/movie`}
                                    onClick={() => {
                                        handleCategoryTypeClick('movie');
                                    }}
                                >
                                    <p className="vermashome">Ver mas...</p>
                                </Link>
                            ) : (
                                ''
                            )}
                            {list.title === 'POPULAR TV SHOWS' ? (
                                <Link
                                    to={`/show/tv`}
                                    onClick={() => {
                                        handleCategoryTypeClick('tv');
                                    }}
                                >
                                    <p className="vermashome">Ver mas...</p>
                                </Link>
                            ) : (
                                ''
                            )}
                        </div>

                        <MovieListHome key={list.id} moviesArray={list.moviesArray} type={list.type} />
                    </>
                ))}
            </div>
        </div>
    );
};
