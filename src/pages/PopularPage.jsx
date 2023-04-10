import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TopMoviesList } from '../components/topMovie/TopMoviesList';
import { Loading } from '../ui/Loading/Loading';
import { Filter } from '../components/filter/Filter';
import { useMoviesStore } from '../hooks/useMoviesStore';
import { MoviesList } from '../components/movie/MoviesList';

const categoryTitles = {
    movie: 'Movies',
    tv: 'TV Shows',
};

export const PopularPage = () => {
    const { movies, topMovies, isLoading, categoryType, filters } = useSelector((state) => state.movies);
    const { sort, genre } = filters;
    const { fetchMovies, useSetMoreMovies } = useMoviesStore();

    const title = categoryTitles[categoryType];

    // Disparamos una función que obtiene las películas cada vez que cambia algún filtro o la categoría
    useEffect(() => {
        fetchMovies();
    }, [sort, genre, categoryType]);

    // Estados para manejar el botón de "Mostrar más"
    const [page, setPage] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [isFirstRender, setIsFirstRender] = useState(true);

    // Disparamos una función que actualiza la página cada vez que se llega al final del scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const pageHeight = document.body.clientHeight;
            const windowHeight = window.innerHeight;

            if (scrollPosition + windowHeight >= pageHeight) {
                setPage(page + 1);
            }
        };

        if (buttonClicked) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);

    // Disparamos una función que obtiene más películas cuando se presiona el botón de "Mostrar más"
    const onClickMoreMovies = () => {
        setPage(page + 1);
        setButtonClicked(true);
        setButtonVisible(false);
    };

    // Disparamos una función que obtiene más películas cada vez que la página cambia
    useEffect(() => {
        if (!isFirstRender) {
            useSetMoreMovies(page);
            console.log(page);
        } else {
            setIsFirstRender(false);
        }
    }, [page]);

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
                        <div className="container-movies-button">
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
