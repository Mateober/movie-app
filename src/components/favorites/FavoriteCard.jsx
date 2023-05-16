import './favoriteCard.scss';
import noImage from '../../assets/noImage.png';
import { FaTrash } from 'react-icons/fa';
import { useFavorites } from '../../hooks/useFavorites';

export const FavoriteCard = ({ movie }) => {
    const title = movie.showname.length >= 35 ? movie.showname.substring(0, 35) + '...' : movie.showname || '';
    const categoryType = movie.media_type == 'movie' ? 'Movie' : 'TV Show';
    const score = Math.round(movie.score * 10) / 10 || 'NR';
    const backdrop = movie.backdrop || '';
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;
    let duration;
    if (hours === 0) {
        duration = `${minutes}m`;
    } else {
        duration = `${hours}h ${minutes}m`;
    }
    const formattedDuration = movie.media_type === 'movie' ? duration : `${movie.duration} Episodes`;

    const { startDeleteFavorite } = useFavorites();

    const movieID = movie.id

    const onClickDelete = () => {
        startDeleteFavorite({movieID})
    }

    const renderImage = () => {
        if (backdrop) {
            return (
                <div className="favoriteCard__img">
                    <img src={`${imageBaseUrl}${backdrop}`} alt={title} />
                </div>
            );
        } else {
            return (
                <div className="noImageDivFavorite">
                    <img src={noImage} alt="no image" />
                </div>
            );
        }
    };

    return (
        <div className="favoriteCard">
            {renderImage()}

            <div className="favoriteCard__info">
                <div>
                    <p className="favoriteCard__info--title">{title}</p>
                    <p className="favoriteCard__info--duration">{formattedDuration}</p>
                </div>

                <div className="favoriteCard__info--info">
                    <p>
                        {categoryType} <span>• {score}</span>
                    </p>
                    <FaTrash onClick={onClickDelete}/>
                </div>
            </div>
        </div>
    );
};
