import React from 'react';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useAuthStore = () => {
    const dispatch = useDispatch();
    const startLogin = async ({ email, password }) => {};
    const startRegister = async ({ name, lastname, email, password }) => {};
    const checkAuthToken = async () => {};
    const startLogout = async () => {};
    return {
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    };
};
