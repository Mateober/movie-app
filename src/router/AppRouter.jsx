import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PeoplePage } from '../pages/PeoplePage';
import { PopularPage } from '../pages/PopularPage';
import { SearchPage } from '../pages/SearchPage';
import Navbar from '../ui/Navbar/Navbar';
import { Footer } from '../ui/Footer/Footer';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/movie" />} />
                <Route path=":category" element={<PopularPage />} />
                <Route path="people" element={<PeoplePage />} />
                <Route path="search/:searchTerm" element={<SearchPage />} />
            </Routes>
            <Footer/>
        </>
    );
};
