import { useParams } from 'react-router-dom';
import { MovieDetail } from './MovieDetail';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../api/api';
import { Loading } from '../../ui/Loading/Loading';

export const MovieDetailContainer = () => {
    const { idMovie } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            if (!idMovie) {
                return;
            }
            const result = await getMovieById(idMovie);
            setMovie(result);
            setIsLoading(false);
        };
        fetchMovie();
    }, [idMovie]);

    return <>{isLoading ? <Loading /> : <MovieDetail movie={movie} />}</>;
};
