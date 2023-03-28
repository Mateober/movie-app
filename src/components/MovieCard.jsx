import { getColor } from "../helpers/getColor";
import "./movieCard.scss";

const MovieCard = ({ movie }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

    const releaseDate = new Date(movie.release_date || movie.first_air_date);

    let formattedReleaseDate = releaseDate.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const ratingColor = getColor(movie.vote_average);
    let rating = Math.round(movie.vote_average * 10);

    if (rating === 0) {
        rating = "NR";
    }

    const sytleRating = {
        background: ratingColor,
    };

    if (formattedReleaseDate === "Invalid Date") {
        formattedReleaseDate = "";
    }

    return (
        <div className="movie__card">
            <div className="movie__image">
                {movie.poster_path ? (
                    <img
                        src={imageBaseUrl + movie.poster_path}
                        alt={movie.title}
                    />
                ) : (
                    <div className="noImageDiv">
                        <img src="../assets/noImage.svg" alt="no image" />
                    </div>
                )}
            </div>
            <div className="circulo1">
                <div className="circulo2" style={sytleRating}>
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
                    <h2>{movie.title ? movie.title : movie.name}</h2>
                </div>
                <div className="movie__info-date">
                    <p>{formattedReleaseDate}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
