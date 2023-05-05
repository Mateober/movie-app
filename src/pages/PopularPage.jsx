import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Loading } from '../ui/Loading/Loading';
import { Filter } from '../components/filter/Filter';
import { useMoviesStore } from '../hooks/useMoviesStore';
import { MoviesList } from '../components/movieCard/MoviesList';

const categoryTitles = {
    movie: 'Movies',
    tv: 'TV Shows',
};

export const PopularPage = () => {
    const { movies, isLoading, categoryType, filters, totalResults } = useSelector((state) => state.movies);
    const { sort, genre } = filters;
    const { fetchMovies, useSetMoreMovies } = useMoviesStore();

    const title = categoryTitles[categoryType];

    // Estados para manejar el botón de "Mostrar más"
    const [page, setPage] = useState(2);
    const [buttonVisible, setButtonVisible] = useState(true);

    useEffect(() => {
        setButtonVisible(totalResults !== movies.length);
    }, [movies.length]);

    // Disparamos una función que obtiene las películas cada vez que cambia algún filtro o la categoría
    useEffect(() => {
        fetchMovies();
        setPage(2);
    }, [sort, genre, categoryType]);

    // Disparamos una función que obtiene más películas cuando se presiona el botón de "Mostrar más"
    const onClickMoreMovies = () => {
        setPage(page + 1);
        useSetMoreMovies(page);
    };

    return (
        <>
            <div className="container-popular">
                <h1 className="title-page">Popular {title}</h1>
                <div className="container-movies-filter">
                    <div className="container-filter">
                        <Filter />
                    </div>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <div className="container-movies-more">
                            <div className="container-movies">
                                <MoviesList movies={movies} />
                            </div>
                            <div className={`${buttonVisible ? '' : 'hidden'} buttonMore `} onClick={onClickMoreMovies}>
                                Mostrar mas
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
