import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMoviesStore } from '../../hooks/useMoviesStore';
import { getFilterOptions } from '../../helpers/getFilterOptions';
import { IoIosArrowForward } from 'react-icons/io';
import './filter.scss';
import { windowScrollUp } from '../../helpers/windowScrollUp';

export const Filter = () => {
    // Obtener el estado actual de Redux
    const { categoryType, filters } = useSelector((state) => state.movies);
    const { sort, genre } = filters;

    // Obtener funciones personalizadas de useMoviesStore
    const { useSetFilters, useSetResetFilters } = useMoviesStore();

    // Guardar las opciones de filtro en el estado local
    const [options, setOptions] = useState({ sort: [], genres: [] });

    // Guardar genres y sortBy
    const [sortBy, setSortBy] = useState('popularity.desc');
    const [genres, setGenres] = useState([]);

    // Obtener las opciones de filtro cuando cambia la categoría
    useEffect(() => {
        const fetchOptions = async () => {
            const filterOptions = await getFilterOptions(categoryType);
            setOptions(filterOptions);
        };
        fetchOptions();
    }, [categoryType]);

    // Manejar la selección de género
    const handleGenreSelect = (event) => {
        const selectedValue = parseInt(event.target.dataset.value);

        const newGenre = genres.includes(selectedValue)
            ? genres.filter((value) => value !== selectedValue)
            : [...genres, selectedValue];

        setGenres(newGenre);
    };

    // Manejar el cambio de ordenamiento
    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    // Manejar el restablecimiento de los filtros
    const handleResetFilters = () => {
        useSetResetFilters();
        setFilterVisible2(false);
    };

    // Manejar el apply de los filtros
    const handleApplytFilters = () => {
        windowScrollUp()
        useSetFilters(sortBy, genres);
    };

    // Manejar la visibilidad de los filtros
    const [filterVisible, setFilterVisible] = useState(true);
    const [filterVisible2, setFilterVisible2] = useState(false);

    // Renderizar el componente
    return (
        <>
            {/* Sección de ordenamiento */}
            <div className="filterPanel">
                <div className="filterPanel__name" onClick={() => setFilterVisible(!filterVisible)}>
                    <h2>Ordenar</h2>
                    <span className={`${filterVisible ? '' : 'rotated'}`}>
                        <IoIosArrowForward />
                    </span>
                </div>
                <div className={`filterPanel__filter ${filterVisible ? '' : 'hidden'}`}>
                    <h3>Ordenar resultador por</h3>
                    <select
                        name="sort-by"
                        id="sort-by"
                        value={sortBy}
                        onChange={handleSortByChange}
                        className="filterPanel__filter--select"
                    >
                        {options.sort.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {/* Sección de géneros */}
            <div className="filterPanel">
                <div className="filterPanel__name" onClick={() => setFilterVisible2(!filterVisible2)}>
                    <h2>Filtros</h2>
                    <span className={`${filterVisible2 ? '' : 'rotated'}`}>
                        <IoIosArrowForward />
                    </span>
                </div>
                <div className={`filterPanel__filter ${filterVisible2 ? '' : 'hidden'}`}>
                    <h3>Géneros</h3>
                    <ul className="filterPanel__filter--multiSelect">
                        {options.genres.map(({ value, label }) => (
                            <li
                                key={value}
                                data-value={value}
                                className={`${genres.includes(value) ? 'selected' : ''}`}
                                onClick={handleGenreSelect}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Botón para restablecer los filtros */}
            <div className="buttonsFilter">
                <div className="buttonFilter buttonAplicar" onClick={handleApplytFilters}>
                    <p>Aplicar</p>
                </div>
                <div className="buttonFilter" onClick={handleResetFilters}>
                    <p>Restablecer</p>
                </div>
            </div>
        </>
    );
};
