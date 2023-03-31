import React, { useEffect, useState } from "react";
import { useMoviesStore } from "../hooks/useMoviesStore";
import { useSelector } from "react-redux";
import { getGenres } from "../api/api";

export const Filter = () => {
    const [sortby, setSortby] = useState("popularity.desc");
    const [genre, setGenre] = useState("");
    const { useSetFilters, fetchMoviesByCategory } = useMoviesStore();
    const [initialRender, setInitialRender] = useState(false);

    const { categoryType } = useSelector((state) => state.movies);
    const [options, setOptions] = useState({ sort: [], genres: [] });

    useEffect(() => {
        const fetchOptions = async () => {
            const genres = await getGenres(categoryType);

            const optionss = {
                sort: [
                    { value: "popularity.asc", label: "Popularity Ascending" },
                    { value: "popularity.desc", label: "Popularity Descending" },
                    { value: "vote_average.asc", label: "Rating Ascending" },
                    { value: "vote_average.desc", label: "Rating Descending" },
                    { value: "release_date.asc", label: "Release Date Ascending" },
                    { value: "release_date.desc", label: "Release Date Descending" },
                    { value: "original_title.asc", label: "Title (A-Z)" },
                    { value: "original_title.desc", label: "Title (Z-A)" },
                ],
                genres: [
                    { value: "", label: "Select a genre" },
                    ...genres.map((genre) => ({
                        value: genre.id.toString(),
                        label: genre.name,
                    })),
                ],
            };

            setOptions(optionss);
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
        setSortby(event.target.value);
        useSetFilters(event.target.value, genre);
    };

    const handleGenreChange = (event) => {
        setGenre(event.target.value);
        useSetFilters(sortby, event.target.value);
    };

    const handleResetFilters = () => {
        setSortby("popularity.desc");
        setGenre("");
        useSetFilters("popularity.desc", "");
    };

    return (
        <div>
            <div>
                <label htmlFor="sort-by">Sort by:</label>
                <select
                    name="sort-by"
                    id="sort-by"
                    value={sortby}
                    onChange={handleSortByChange}
                >
                    {options.sort.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="genre">Genre:</label>
                <select
                    name="genre"
                    id="genre"
                    value={genre}
                    onChange={handleGenreChange}
                >
                    {options.genres.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleResetFilters}>Reset</button>
        </div>
    );
};
