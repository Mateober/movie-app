import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PopularPage } from '../pages/PopularPage';
import { SearchPage } from '../pages/SearchPage';
import Navbar from '../ui/Navbar/Navbar';
import { Footer } from '../ui/Footer/Footer';
import { MovieDetailContainer } from '../components/movieDetail/MovieDetailContainer';
import { HomePage } from '../pages/HomePage';
import { PageNotFound } from '../pages/PageNotFound';
import { LoginPage } from '../pages/LoginPage';
import { useAuthStore } from '../hooks/useAuthStore';
import { useSelector } from 'react-redux';
import { FavoritesPage } from '../pages/FavoritesPage';

export const AppRouter = () => {
    const { checkAuthToken } = useAuthStore();
    const { status } = useSelector((state) => state.auth);

    useEffect(() => {
        checkAuthToken();
    }, []);
    return (
        <>
            <Navbar />
            <Routes>
                {status === 'not-authenticated' || status === 'checking' ? (
                    <>
                        <Route path="login" element={<LoginPage />} />
                    </>
                ) : (
                    <></>
                )}
                {/* <Route path="*" element={<PageNotFound />} /> */}
                <Route path="*" element={<Navigate to="home" />} />
                <Route path="/" element={<Navigate to="home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                <Route path="show/:category" element={<PopularPage />} />
                <Route path="search/:searchTerm" element={<SearchPage />} />
                <Route path="/:categoryType/:idMovie" element={<MovieDetailContainer />} />
            </Routes>
            <Footer />
        </>
    );
};
