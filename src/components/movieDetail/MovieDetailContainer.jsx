import { useParams } from 'react-router-dom';
import { MovieDetail } from './MovieDetail';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../api/api';

export const MovieDetailContainer = () => {
    const { idMovie } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            if (!idMovie) {
                return;
            }
            const result = await getMovieById(idMovie);
            setMovie(result);
        };
        fetchMovie();
    }, [idMovie]);

    return (
        <>
            <MovieDetail movie={movie} />
        </>
    );
};
