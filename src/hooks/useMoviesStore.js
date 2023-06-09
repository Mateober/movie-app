import { useDispatch, useSelector } from 'react-redux';
import {
    setMovies,
    setMoreMovies,
    setLoading,
    setError,
    setCategoryType,
    setFilters,
    setTotalResults,
} from '../store/movies/moviesSlice';
import { getMoviesByCategory, getTotalResults } from '../api/api';

export const useMoviesStore = () => {
    // Obtenemos el dispatch y los datos del estado desde el store de Redux
    const dispatch = useDispatch();
    const { movies, isLoading, error, categoryType, filters } = useSelector((state) => state.movies);
    const { sort, genre } = filters;

    // Función para cargar las películas
    const fetchMovies = async () => {
        try {
            dispatch(setLoading(true));

            const data = await getMoviesByCategory(categoryType, sort, genre);
            const dataResults = await getTotalResults(categoryType, sort, genre);

            dispatch(setMovies(data));
            dispatch(setTotalResults(dataResults));
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setError(error));
            dispatch(setLoading(false));
        }
    };

    const useSetMoreMovies = async (page) => {
        const newMovies = await getMoviesByCategory(categoryType, sort, genre, page);
        dispatch(setMoreMovies(newMovies));
    };

    // Función para establecer el tipo de categoría en el estado de Redux
    const useSetCategoryType = (categoryType) => {
        dispatch(setCategoryType(categoryType));
    };

    // Función para establecer los filtros en el estado de Redux
    const useSetFilters = async (sort, genre) => {
        dispatch(setFilters({ sort, genre }));
    };

    // Función para restablecer los filtros a sus valores predeterminados
    const useSetResetFilters = () => {
        if (sort !== 'popularity.desc' || genre.length !== 0) {
            useSetFilters('popularity.desc', []);
        }
    };

    // Devolvemos las propiedades y las funciones para usarlas en otros componentes de React
    return {
        movies,
        isLoading,
        error,
        categoryType,
        fetchMovies,
        useSetMoreMovies,
        useSetFilters,
        useSetCategoryType,
        useSetResetFilters,
    };
};
