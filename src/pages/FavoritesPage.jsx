import { useEffect, useState } from 'react';
import { FavoriteCard } from '../components/favorites/FavoriteCard';
import { useFavorites } from '../hooks/useFavorites';
import { LoadingFavorites } from '../ui/Loading/LoadingFavorites';
export const FavoritesPage = () => {
    const [activeType, setActiveType] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const { startGetFavorites, startDeleteFavorite } = useFavorites();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setFavorites(await startGetFavorites());
            setIsLoading(false)
        };
        fetchData();
    }, []);

    const clickDelete = ({ movieID }) => {
        startDeleteFavorite({ movieID });
        setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieID));
    };

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
                {isLoading ? (
                    <LoadingFavorites />
                ) : (
                    <>
                        {favorites.length === 0 && (
                            <div className="noFav">
                                <p>You have not added anything to favorites</p>
                            </div>
                        )}
                    </>
                )}

                <div className="favoritesCatalog">
                    {favorites.map((movie) => (
                        <FavoriteCard key={movie.id} movie={movie} clickDelete={clickDelete} />
                    ))}
                </div>
            </div>
        </>
    );
};
