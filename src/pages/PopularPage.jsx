import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TopMoviesList } from '../components/topMovie/TopMoviesList';
import { Loading } from '../ui/Loading/Loading';
import { Filter } from '../components/filter/Filter';
import { useMoviesStore } from '../hooks/useMoviesStore';
import { MoviesList } from '../components/movie/MoviesList';

export const PopularPage = () => {
    const { movies, topMovies, isLoading, categoryType, filters } = useSelector((state) => state.movies);
    const { sort, genre } = filters;
    const { fetchMovies } = useMoviesStore();

    const categoryTitles = {
        movie: 'MOVIES',
        tv: 'TV SHOWS',
    };

    const title = categoryTitles[categoryType];

    // Obtener las películas cada vez que cambia algún filtro
    useEffect(() => {
        fetchMovies();
    }, [sort, genre, categoryType]);

    return (
        <>
            <div className="div-title-page">
                <h1 className="title-page">POPULAR {title}</h1>
            </div>
            <Filter />

            {isLoading ? (
                <Loading />
            ) : (
                <div className="container-popular-top">
                    <div className="container-movies">
                        <MoviesList movies={movies} />
                    </div>
                    <div className="container-filter-top">
                        <TopMoviesList movies={topMovies} />
                    </div>
                </div>
            )}
        </>
    );
};
