import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMoviesStore } from "../hooks/useMoviesStore";
import { getFilterOptions } from "../helpers/getFilterOptions";
import "./filter.scss";

export const Filter = () => {
    // Redux
    const { categoryType, filters } = useSelector((state) => state.movies);
    const { sort, genre } = filters;
    const { useSetFilters, fetchMoviesByCategory } = useMoviesStore();

    // Fetch options
    const [options, setOptions] = useState({ sort: [], genres: [] });
    useEffect(() => {
        const fetchOptions = async () => {
            const filterOptions = await getFilterOptions(categoryType);
            setOptions(filterOptions);
        };
        fetchOptions();
    }, [categoryType]);

    // Fetch movies by filters
    useEffect(() => {
        if (initialRender) {
            fetchMoviesByCategory();
        } else {
            setInitialRender(true);
        }
    }, [sort, genre]);
    const [initialRender, setInitialRender] = useState(false);

    // Handle genre select
    const handleGenreSelect = (event) => {
        const selectedValue = parseInt(event.target.dataset.value);
        const newGenre = genre.includes(selectedValue)
            ? genre.filter((value) => value !== selectedValue)
            : [...genre, selectedValue];
        useSetFilters(sort, newGenre);
    };

    // Handle sort by change
    const handleSortByChange = (event) => {
        useSetFilters(event.target.value, genre);
    };

    // Handle reset filters
    const handleResetFilters = () => {
        useSetFilters("popularity.desc", []);
    };
    console.log("hola")
    // Render
    return (
        <div>
            <div>
                <label htmlFor="sort-by">Ordenar por:</label>
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
            <div className="main__filter">
                <div className="filter">
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
            <button onClick={handleResetFilters}>Restablecer</button>
        </div>
    );
};
