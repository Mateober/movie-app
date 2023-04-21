import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PeoplePage } from '../pages/PeoplePage';
import { PopularPage } from '../pages/PopularPage';
import { SearchPage } from '../pages/SearchPage';
import Navbar from '../ui/Navbar/Navbar';
import { Footer } from '../ui/Footer/Footer';
import { MovieDetailContainer } from '../components/movieDetail/MovieDetailContainer';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/notFoundPage';

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="show/:category" element={<PopularPage />} />
                <Route path="people" element={<PeoplePage />} />
                <Route path="search/:searchTerm" element={<SearchPage />} />
                <Route path="/:categoryType/:idMovie" element={<MovieDetailContainer />} />
            </Routes>
            <Footer />
        </>
    );
};
