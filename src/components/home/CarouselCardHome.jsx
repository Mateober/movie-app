import { Link } from 'react-router-dom';
import { useMoviesStore } from '../../hooks/useMoviesStore';
import { windowScrollUp } from '../../helpers/windowScrollUp';

export const CarouselCardHome = ({ movie }) => {
    const { release_date, first_air_date, vote_average, title, backdrop_path, id } = movie;
    const releaseYear = new Date(release_date).getFullYear() || new Date(first_air_date).getFullYear() || '';
    const score = vote_average || '';
    const titleMovie = title || '';
    const backdropImage = backdrop_path || '';

    const backdropImageBaseUrl = 'https://image.tmdb.org/t/p/original/';

    const { useSetCategoryType } = useMoviesStore();

    const onClickVerMas = () => {
        useSetCategoryType('movie');
        windowScrollUp();
    };
    return (
        <div className="carouselDiv" style={{ backgroundImage: `url(${backdropImageBaseUrl}${backdropImage})` }}>
            <div className="carouselDiv2">
                <div className="carouselDiv3">
                    <div className="carouselDiv4">
                        <div className="carousel__titleyear">
                            <p className="carousel__title">
                                {titleMovie}
                                <span>({releaseYear})</span>
                            </p>
                        </div>
                        <p className="carousel__score">{score}/10</p>
                        <Link
                            to={`/movie/${id}`}
                            onClick={() => {
                                onClickVerMas();
                            }}
                        >
                            <div className="carousel__button">More info...</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
