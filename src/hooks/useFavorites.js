import { backendApi } from '../api';

const token = localStorage.getItem('token');
const config = {
    headers: { Authorization: `Bearer ${token}` },
};

export const useFavorites = () => {
    const startGetFavorites = async () => {
        try {
            const { data } = await backendApi.get('/favorite', config);
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const startDeleteFavorite = async ({ movieID }) => {
        try {
            await backendApi.delete(`/favorite/${movieID}`, config);
            console.log("SE BORRO")
        } catch (error) {
            console.log(error);
        }
    };

    const startAddFavorite = async ({ favInfo }) => {
        try {
            await backendApi.post('/favorite', favInfo, config);
            console.log("SE AGREGO")
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
