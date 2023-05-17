import { backendApi } from '../api';

export const useFavorites = () => {
    const startGetFavorites = async () => {
        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        try {
            const { data } = await backendApi.get('/favorite', config);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const startDeleteFavorite = async ({ movieID }) => {
        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        try {
            await backendApi.delete(`/favorite/${movieID}`, config);
            console.log('SE BORRO');
        } catch (error) {
            console.log(error);
        }
    };

    const startAddFavorite = async ({ favInfo }) => {
        const token = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        try {
            await backendApi.post('/favorite', favInfo, config);
            console.log('SE AGREGO');
        } catch (error) {
            console.log(error);
        }
    };

    return {
        startGetFavorites,
        startDeleteFavorite,
        startAddFavorite,
    };
};
