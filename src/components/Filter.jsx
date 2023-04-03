import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useMoviesStore } from "../hooks/useMoviesStore";
import { getFilterOptions } from "../helpers/getFilterOptions";
import "./filter.scss";

export const Filter = () => {
    console.log("Filter")
    const { categoryType } = useSelector((state) => state.movies);
    const { useSetFilters, fetchMoviesByCategory } = useMoviesStore();

    const [initialRender, setInitialRender] = useState(false);

    const [sortby, setSortby] = useState("popularity.desc");
    const [genre, setGenre] = useState("");
    const [options, setOptions] = useState({ sort: [], genres: [] });

    useEffect(() => {
        const fetchOptions = async () => {
            const filterOptions = await getFilterOptions(categoryType);
            setOptions(filterOptions);
        };

        fetchOptions();
    }, [categoryType]);

    useEffect(() => {
        if (initialRender) {
            fetchMoviesByCategory();
        } else {
            setInitialRender(true);
        }
    }, [sortby, genre]);

    const handleSortByChange = (event) => {
        const sortByValue = event.target.value;
        setSortby(sortByValue);
        useSetFilters(sortByValue, genre);
    };

    const handleGenreChange = (event) => {
        const genreValue = event.target.value;
        setGenre(genreValue);
        useSetFilters(sortby, genreValue);
    };

    const handleResetFilters = () => {
        setSortby("popularity.desc");
        setGenre("");
        useSetFilters("popularity.desc", "");
    };

/*     const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreSelect = (event) => {
      const selectedValue = event.target.getAttribute("data-value");
      if (selectedGenres.includes(selectedValue)) {
        setSelectedGenres(selectedGenres.filter((value) => value !== selectedValue));
      } else {
        setSelectedGenres([...selectedGenres, selectedValue]);
      }
    }; */

    return (
        <div>
            <div>
                <label htmlFor="sort-by">Ordenar por:</label>
                <select
                    name="sort-by"
                    id="sort-by"
                    value={sortby}
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
{/*             <div>
                <h3>Géneros</h3>
                <ul>
                    {options.genres.map(({ value, label }) => (
                        <li
                            key={value}
                            data-value={value}
                            className={`filterOption ${
                                selectedGenres.includes(value) ? "selected" : ""
                            }`}
                            onClick={handleGenreSelect}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </div> */}
                        <div>
                <label htmlFor="genre">Género:</label>
                <select
                    name="genre"
                    id="genre"
                    value={genre}
                    onChange={handleGenreChange}
                    className="filterSelect"
                >
                    {options.genres.map(({ value, label }) => (
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
            <button onClick={handleResetFilters}>Restablecer</button>
        </div>
    );
};
