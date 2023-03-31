import React from "react";
import { Routes, Route } from "react-router-dom";
import { PeoplePage } from "../pages/PeoplePage";
import { PopularPage } from "../pages/PopularPage";
import { SearchPage } from "../pages/SearchPage";
import Navbar from "../ui/Navbar/Navbar";
import { Filter } from "../components/Filter";

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Filter />
            <Routes>
                <Route path="/" element={<PopularPage />} />
                <Route path="popular/:category" element={<PopularPage />} />
                <Route path="people" element={<PeoplePage />} />
                <Route path="search/:searchTerm" element={<SearchPage />} />
            </Routes>
        </>
    );
};
