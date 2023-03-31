import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/movies/moviesSlice";

export const useFilter = () => {
    const dispatch = useDispatch();
    const { filters } = useSelector((state) => state.movies);

    return {
        movies,
    };
};
