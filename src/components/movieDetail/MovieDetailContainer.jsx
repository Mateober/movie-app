import { useParams } from 'react-router-dom';
import { MovieDetail } from './MovieDetail';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../api/api';
import { Loading } from '../../ui/Loading/Loading';
import { useSelector } from 'react-redux';

export const MovieDetailContainer = () => {
    const { idMovie } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { categoryType } = useSelector((state) => state.movies);

    useEffect(() => {
        const fetchMovie = async () => {
            if (!idMovie) {
                return;
            }
            const result = await getMovieById(categoryType, idMovie);
            setTimeout(() => {
                setMovie(result);
                setIsLoading(false);
            }, 500);
        };
        fetchMovie();
    }, [idMovie]);

    return <>{isLoading ? <Loading /> : <MovieDetail movie={movie} />}</>;
};
