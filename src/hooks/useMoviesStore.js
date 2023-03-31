import { useDispatch, useSelector } from "react-redux";
import {
    setMovies,
    setTopMovies,
    setLoading,
    setError,
    setMovieClass,
} from "../store/movies/moviesSlice";
import { getMoviesByCategory, getTopRatedMovies } from "../api/api";

export const useMoviesStore = () => {
    const dispatch = useDispatch();
    const { movies, isLoading, error, movieClass, topMovies } = useSelector(
        (state) => state.movies
    );

    const fetchMoviesByCategory = async (category) => {
        try {
            dispatch(setLoading(true));
            dispatch(setMovieClass(category));

            const data = await getMoviesByCategory(category);
            const data2 = await getTopRatedMovies(category);

            setTimeout(() => {
                dispatch(setMovies(data));
                dispatch(setTopMovies(data2));
                dispatch(setLoading(false));
            }, 1000);
        } catch (error) {
            dispatch(setError(error));
            dispatch(setLoading(false));
        }
    };

    return {
        movies,
        topMovies,
        isLoading,
        error,
        movieClass,
        fetchMoviesByCategory,
    };
};
