import { useDispatch, useSelector } from "react-redux";
import {
    setMovies,
    setTopMovies,
    setLoading,
    setError,
    setCategoryType,
    setFilters,
} from "../store/movies/moviesSlice";
import { getMoviesByCategory, getTopRatedMovies } from "../api/api";

export const useMoviesStore = () => {
    const dispatch = useDispatch();
    const { movies, isLoading, error, categoryType, topMovies, filters } =
        useSelector((state) => state.movies);

    const fetchMoviesByCategory = async () => {
        try {
            dispatch(setLoading(true));
            
            const data = await getMoviesByCategory(
                categoryType,
                filters.sort,
                filters.genre
            );
            const data2 = await getTopRatedMovies(categoryType);

            //setTimeout(() => {
                dispatch(setMovies(data));
                dispatch(setTopMovies(data2));
                //dispatch(setLoading(false));
            //}, 1000);
        } catch (error) {
            dispatch(setError(error));
            //dispatch(setLoading(false));
        }
    };

    const useSetCategoryType = (categoryType) => {
        dispatch(setCategoryType(categoryType));
    };

    const useSetFilters = (sortby, genre) => {
        dispatch(setFilters({ sort: sortby, genre: genre }));
    };

    return {
        movies,
        topMovies,
        isLoading,
        error,
        categoryType,
        fetchMoviesByCategory,
        useSetFilters,
        useSetCategoryType,
    };
};
