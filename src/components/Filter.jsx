import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMoviesStore } from "../hooks/useMoviesStore";
import { getFilterOptions } from "../helpers/getFilterOptions";
import { IoIosArrowForward } from "react-icons/io";
import "./filter.scss";

export const Filter = () => {
    // Obtener el estado actual de Redux
    const { categoryType, filters } = useSelector((state) => state.movies);
    const { sort, genre } = filters;

    // Obtener funciones personalizadas de useMoviesStore
    const { useSetFilters, fetchMovies, useSetResetFilters } = useMoviesStore();

    // Guardar las opciones de filtro en el estado local
    const [options, setOptions] = useState({ sort: [], genres: [] });

    // Obtener las opciones de filtro cuando cambia la categoría
    useEffect(() => {
        const fetchOptions = async () => {
            const filterOptions = await getFilterOptions(categoryType);
            setOptions(filterOptions);
        };
        fetchOptions();
    }, [categoryType]);

    // Obtener las películas cada vez que cambia algún filtro
    useEffect(() => {
        fetchMovies();
    }, [sort, genre, categoryType]);

    // Manejar la selección de género
    const handleGenreSelect = (event) => {
        const selectedValue = parseInt(event.target.dataset.value);
        const newGenre = genre.includes(selectedValue)
            ? genre.filter((value) => value !== selectedValue)
            : [...genre, selectedValue];
        useSetFilters(sort, newGenre);
    };

    // Manejar el cambio de ordenamiento
    const handleSortByChange = (event) => {
        useSetFilters(event.target.value, genre);
    };

    // Manejar el restablecimiento de los filtros
    const handleResetFilters = () => {
        useSetResetFilters();
    };
    const [filterVisible, setFilterVisible] = useState(false);
    const [filterVisible2, setFilterVisible2] = useState(false);

    // Renderizar el componente
    return (
        <div>
            {/* Sección de ordenamiento */}
            <div className="filter_panel">
                <div className="name" onClick={() => setFilterVisible(!filterVisible)}>
                    <h2>Ordenar</h2>
                    <span className={`arrow_filter ${filterVisible ? '' : 'rotated'}`}>
                        <IoIosArrowForward />
                    </span>
                </div>
                <div className={`filter ${filterVisible ? '' : 'hidden'}`}>
                    <h3>Ordenar resultador por</h3>
                    <select
                        name="sort-by"
                        id="sort-by"
                        value={sort}
                        onChange={handleSortByChange}
                        className="filterSelect"
                    >
                        {options.sort.map(({ value, label }) => (
                            <option
                                key={value}
                                value={value}
                                className="filterOption"
                            >
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>            
            {/* Sección de géneros */}
            <div className="filter_panel">
                <div className="name" onClick={() => setFilterVisible2(!filterVisible2)}>
                    <h2>Filtros</h2>
                    <span className={`arrow_filter ${filterVisible2 ? '' : 'rotated'}`}>
                        <IoIosArrowForward />
                    </span>
                </div>
                <div className={`filter ${filterVisible2 ? '' : 'hidden'}`}>
                    <h3>Géneros</h3>
                    <ul className="multi_select">
                        {options.genres.map(({ value, label }) => (
                            <li
                                key={value}
                                data-value={value}
                                className={`filterOption ${
                                    genre.includes(value) ? "selected" : ""
                                }`}
                                onClick={handleGenreSelect}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>



            {/* Botón para restablecer los filtros */}
            <button onClick={handleResetFilters}>Restablecer</button>
        </div>
    );
};
