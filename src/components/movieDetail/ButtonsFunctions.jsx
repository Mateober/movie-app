import { useEffect, useState } from 'react';
import { ImBookmark, ImHeart, ImCheckmark } from 'react-icons/im';
import { useNavigate, useParams } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
import { useSelector } from 'react-redux';
export const ButtonsFunctions = ({ details }) => {
    const { status } = useSelector((state) => state.auth);
    const { categoryType, idMovie } = useParams();
    const [favInfo, setFavInfo] = useState({
        media_type: categoryType == 'Movies' ? 'movie' : 'tv',
        media_id: idMovie,
        backdrop: details.backdrop_path || null,
        poster: details.poster_path || null,
        showname: details.name || details.title || null,
        year: details.release_date || details.first_air_date || null,
        duration: details.runtime || details.number_of_episodes || null,
        score: details.vote_average.toFixed(1) || null,
    });
    const [favorite, setFavorite] = useState(false);
    const [list, setList] = useState(false);
    const [watched, setWatched] = useState(false);

    const [selectedMovieId, setSelectedMovieId] = useState(undefined);

    const { startDeleteFavorite, startGetFavorites, startAddFavorite } = useFavorites();

    const fetchData = async () => {
        const favorites = await startGetFavorites();
        forEachMovies(favorites);
    };

    const forEachMovies = (movies) => {
        movies.forEach((movie) => {
            if (movie.media_id == idMovie) {
                setFavorite(true);
                setSelectedMovieId(movie.id);
            } else {
            }
        });
    };

    if (status == 'authenticated') {
        useEffect(() => {
            fetchData();
        }, []);
    }

    const navigate = useNavigate();

    const onClickFavorite = async () => {
        const movieID = selectedMovieId;

        if (status == 'authenticated') {
            if (favorite) {
                await startDeleteFavorite({ movieID });
                setFavorite(false);
                fetchData();
            } else {
                await startAddFavorite({ favInfo });
                setFavorite(true);
                fetchData();
            }
        } else {
            navigate('/login');
        }
    };

    const onClickList = () => {
        setList(!list);
    };
    const onClickWatched = () => {
        setWatched(!watched);
    };

    return (
        <div className="movieDetail__buttons">
            <div onClick={onClickFavorite}>
                <ImHeart className={`iconFav ${favorite ? 'iconActiveFav' : ''}`} />
            </div>
            <div onClick={onClickList}>
                <ImBookmark className={`iconList ${list ? 'iconActiveList' : ''}`} />
            </div>
            <div onClick={onClickWatched}>
                <ImCheckmark className={`iconWatched ${watched ? 'iconActiveWatched' : ''}`} />
            </div>
        </div>
    );
};
