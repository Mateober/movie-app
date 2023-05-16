import { useEffect, useState } from 'react';
import { FavoriteCard } from '../components/favorites/FavoriteCard';
import { backendApi } from '../api';
import { useFavorites } from '../hooks/useFavorites';
export const FavoritesPage = () => {
    const [activeType, setActiveType] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const { startGetFavorites } = useFavorites();

    useEffect(() => {
        const fetchData = async () => {
            setFavorites(await startGetFavorites());
        };
        fetchData();
    }, []);
    

    return (
        <>
            <div className="favoritesContainer">
                <div className="favoritesHome">
                    <div className="favoritesHome__title">
                        <p>My movies and TV Shows</p>
                    </div>
                    <div className="favoritesHome__type">
                        <p className={activeType ? '' : 'activeType'}>Favorites</p>
                        <p>Lists</p>
                        <p>Recently Watched</p>
                    </div>
                </div>

                <div className="favoritesCatalog">
                    {favorites.map((movie) => (
                        <FavoriteCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    );
};
