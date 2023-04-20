import React, { useState, useEffect } from 'react';
import { searchMovies } from '../api/api';
import { useParams } from 'react-router-dom';
import { Loading } from '../ui/Loading/Loading';
import { MoviesList } from '../components/movieCard/MoviesList';

export const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { searchTerm } = useParams();

    const [page, setPage] = useState(2);
    const [buttonVisible, setButtonVisible] = useState(true);

    const onClickMoreMovies = async () => {
        setPage(page + 1);
        const results = await searchMovies(searchTerm, page);
        setMovies([...movies, ...results]);
    };

    useEffect(() => {
        const search = async () => {
            setLoading(true);
            const results = await searchMovies(searchTerm);
            setMovies(results);
            setPage(2);
            setLoading(false);
        };

        search();
    }, [searchTerm]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <div className="container-searchpage">
                <div className="div-title-page">
                    <h1 className="title-page">RESULTS FOR {searchTerm}</h1>
                </div>

                {movies.length === 0 ? (
                    <p>NO HAY PELICULAS</p>
                ) : (
                    <div className="container-movies-search">
                        <MoviesList movies={movies} />
                    </div>
                )}
                <div className={`${buttonVisible ? '' : 'hidden'} buttonMore `} onClick={onClickMoreMovies}>
                    Mostrar mas
                </div>
            </div>
        </>
    );
};
