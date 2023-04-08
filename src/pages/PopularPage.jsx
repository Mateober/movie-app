import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TopMoviesList } from '../components/topMovie/TopMoviesList';
import { Loading } from '../ui/Loading/Loading';
import { Filter } from '../components/filter/Filter';
import { useMoviesStore } from '../hooks/useMoviesStore';
import { MoviesList } from '../components/movie/MoviesList';

const categoryTitles = {
    movie: 'MOVIES',
    tv: 'TV SHOWS',
};

export const PopularPage = () => {
    const { movies, topMovies, isLoading, categoryType, filters } = useSelector((state) => state.movies);
    const { sort, genre } = filters;
    const { fetchMovies, useSetMoreMovies } = useMoviesStore();

    const title = categoryTitles[categoryType];

    useEffect(() => {
        fetchMovies();
    }, [sort, genre, categoryType]);

    const [page, setPage] = useState(1);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);
    const [isFirstRender, setIsFirstRender] = useState(true);

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

    const onClickMoreMovies = () => {
        setPage(page + 1);
        setButtonClicked(true);
        setButtonVisible(false);
    };

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
                        <button className={buttonVisible ? '' : 'hidden'} onClick={onClickMoreMovies}>
                            Mostrar mas
                        </button>
                    </div>
                    <div className="container-filter-top">
                        <TopMoviesList movies={topMovies} />
                    </div>
                </div>
            )}
        </>
    );
};
