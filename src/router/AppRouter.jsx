import React from "react";
import { Routes, Route } from "react-router-dom";
import { MoviesPopularPage } from "../pages/MoviesPopularPage";
import { PeoplePage } from "../pages/PeoplePage";
import { SearchPage } from "../pages/SearchPage";
import { TvPopularPage } from "../pages/TvPopularPage";
import Navbar from "../ui/Navbar/Navbar";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<TvPopularPage />} />
                <Route path="movies" element={<MoviesPopularPage />} />
                <Route path="tv" element={<TvPopularPage />} />
                <Route path="people" element={<PeoplePage />} />
                <Route path="search/:searchTerm" element={<SearchPage />} />
            </Routes>
        </>
    );
};
