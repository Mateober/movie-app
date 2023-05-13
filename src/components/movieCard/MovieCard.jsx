import { Circle } from '../circle/Circle';
import { Link } from 'react-router-dom';
import './movieCard.scss';
import { useSelector } from 'react-redux';
import { windowScrollUp } from '../../helpers/windowScrollUp';
import noImage from '../../assets/noImage.png';

const MovieCard = ({ movie }) => {
    const { release_date, first_air_date, poster_path, title, name, vote_average, id } = movie;
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

    const { categoryType } = useSelector((state) => state.movies);

    const releaseDate = new Date(release_date || first_air_date);

    let formattedReleaseDate = releaseDate.toLocaleDateString('en', {
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

    return (
        <Link to={`/${categoryType}/${id}`} onClick={windowScrollUp}>
            <div className="movieCard animate__animated animate__fadeIn">
                <div className="movieCard__image">{renderImage()}</div>
                <div className="movieCard__circle">
                    <Circle vote_average={vote_average} />
                </div>
                <div className="movieCard__info">
                    <div className="movieCard__info--title">
                        <h2>{title || name}</h2>
                    </div>
                    <div className="movieCard__info--date">
                        <p>{formattedReleaseDate}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
