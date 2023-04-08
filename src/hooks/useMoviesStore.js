import { useDispatch, useSelector } from 'react-redux';
import {
    setMovies,
    setMoreMovies,
    setTopMovies,
    setLoading,
    setError,
    setCategoryType,
    setFilters,
} from '../store/movies/moviesSlice';
import { getMoviesByCategory, getTopRatedMovies } from '../api/api';

export const useMoviesStore = () => {
    // Obtenemos el dispatch y los datos del estado desde el store de Redux
    const dispatch = useDispatch();
    const { movies, isLoading, error, categoryType, topMovies, filters } = useSelector((state) => state.movies);
    const { sort, genre } = filters;

    // Función para cargar las películas
    const fetchMovies = async () => {
        try {
            dispatch(setLoading(true)); // Establecemos el estado de carga a verdadero

            // Obtenemos los datos de las películas y las películas principales de la API
            const data = await getMoviesByCategory(categoryType, sort, genre);
            const data2 = await getTopRatedMovies(categoryType);

            // Esperamos un segundo para simular una carga más realista
            setTimeout(() => {
                // Establecemos las películas en el estado de Redux
                dispatch(setMovies(data));
                dispatch(setTopMovies(data2));
                dispatch(setLoading(false)); // Establecemos el estado de carga a falso
            }, 1000);
        } catch (error) {
            dispatch(setError(error)); // Establecemos el error en el estado de Redux
            dispatch(setLoading(false)); // Establecemos el estado de carga a falso
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
        topMovies,
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
