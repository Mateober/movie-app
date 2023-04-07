import { Circle } from '../circle/circle';
import './movieCard.scss';
import '../circle/circle.scss';

const MovieCard = ({ movie }) => {
    const { release_date, first_air_date, poster_path, title, name, vote_average } = movie;
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
                    <img src="../assets/noImage.svg" alt="no image" />
                </div>
            );
        }
    };

    return (
        <div className="movieCard animate__animated animate__fadeIn">
            <div className="movieCard__image">{renderImage()}</div>
            <Circle vote_average={vote_average} />
            <div className="movieCard__info">
                <div className="movieCard__info--title">
                    <h2>{title || name}</h2>
                </div>
                <div className="movieCard__info--date">
                    <p>{formattedReleaseDate}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
