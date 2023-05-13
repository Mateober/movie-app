import React from 'react';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { backendApi } from '../api';

export const useAuthStore = () => {
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await backendApi.post('/Login', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({}));
            clearErrorMessage();
            checkAuthToken()
        } catch (error) {
            dispatch(onLogout(error.response.data?.message || ''));
        }
    };

    const startRegister = async ({ name, lastname, email, password, username, profilepic }) => {
        dispatch(onChecking());
        try {
            const { data } = await backendApi.post('/SignUp', { name, lastname, email, password, username, profilepic });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({}));
            clearErrorMessage();
            checkAuthToken()
        } catch (error) {
            dispatch(onLogout(error.response.data?.message || ''));
        }
    };

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());
        try {
            const { data } = await backendApi.get('/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch(onLogin(data));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout(error.response.data?.message || 'ERROR'));
        }
    };

    const startLogout = async () => {
        localStorage.clear();
        dispatch(onLogout());
    };

    return {
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    };
};
