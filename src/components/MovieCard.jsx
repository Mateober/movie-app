import { getColor } from "../helpers/getColor";
import "./movieCard.scss";

const MovieCard = ({ movie }) => {
    const {
        release_date,
        first_air_date,
        poster_path,
        title,
        name,
        vote_average,
    } = movie;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

    const releaseDate = new Date(release_date || first_air_date);

    let formattedReleaseDate = releaseDate.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const ratingColor = getColor(vote_average);
    let rating = Math.round(vote_average * 10);

    if (rating === 0) {
        rating = "NR";
    }

    const styleRating = {
        background: ratingColor,
    };

    if (formattedReleaseDate === "Invalid Date") {
        formattedReleaseDate = "";
    }

    const renderImage = () => {
        if (poster_path) {
            return (
                <img
                    src={`${imageBaseUrl}${poster_path}`}
                    alt={title || name}
                />
            );
        } else {
            return (
                <div className="noImageDiv">
                    <img src="../assets/noImage.svg" alt="no image" />
                </div>
            );
        }
    };

    return (
        <div className="movie__card animate__animated animate__fadeIn">
            <div className="movie__image">{renderImage()}</div>
            <div className="circulo1">
                <div className="circulo2" style={styleRating}>
                    <div className="circulo3">
                        <p>
                            {rating}
                            {rating !== "NR" && (
                                <span className="porciento">%</span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div className="movie__info">
                <div className="movie__info-title">
                    <h2>{title || name}</h2>
                </div>
                <div className="movie__info-date">
                    <p>{formattedReleaseDate}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
