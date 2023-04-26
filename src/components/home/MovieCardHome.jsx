import { Link } from 'react-router-dom';
import { windowScrollUp } from '../../helpers/windowScrollUp';
import noImage from '../../assets/noImage.png';
import { useMoviesStore } from '../../hooks/useMoviesStore';

export const MovieCardHome = ({ movie, type }) => {
    const { release_date, first_air_date, poster_path, title, name, vote_average, id, runtime } = movie;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    const releaseDate = new Date(release_date || first_air_date);

    let formattedReleaseDate = releaseDate.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });

    if (formattedReleaseDate === 'Invalid Date') {
        formattedReleaseDate = '';
    }

    const renderImage = () => {
        if (poster_path) {
            return <img src={`${imageBaseUrl}${poster_path}`} alt={title || name} />;
        } else {
            return (
                <div className="noImageDiv">
                    <img src={noImage} alt="no image" />
                </div>
            );
        }
    };

    const { useSetCategoryType } = useMoviesStore();

    const onClickCard = () => {
        useSetCategoryType(type);
        windowScrollUp();
    };

    return (
        <>
            <Link to={`/${type}/${id}`} onClick={onClickCard}>
                <div className="cardhome">
                    <div className="cardhome__img">{renderImage()}</div>
                    <div className="cardhome__info">
                        <h3>{title || name}</h3>
                        <p>{formattedReleaseDate}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};
