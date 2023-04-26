export const CarouselCardHome = ({ movie }) => {
    const { runtime, release_date, first_air_date, vote_average, title, backdrop_path, overview } = movie;
    const releaseYear = new Date(release_date).getFullYear() || new Date(first_air_date).getFullYear() || '';
    const duration = runtime ? `${Math.floor(runtime / 60)}h ${runtime % 60}m` : '';
    const score = vote_average || '';
    const resumen = overview || '';
    const titleMovie = title || '';
    const backdropImage = backdrop_path || '';

    const backdropImageBaseUrl = 'https://image.tmdb.org/t/p/original/';
    return (
        <div className="carouselDiv" style={{ backgroundImage: `url(${backdropImageBaseUrl}${backdropImage})` }}>
            <div className="carouselDiv2">
                <div className="carouselDiv3">
                    <p className="carousel__title">{titleMovie}</p>
                    <div className="carousel__info">
                        <p className="carousel__info--score">{score}</p>
                        <p className="carousel__info--year">{releaseYear}</p>
                    </div>
                    <p className="carousel__resumen">{resumen}</p>
                    <div className="carousel__button">BOTON</div>
                </div>
            </div>
        </div>
    );
};
