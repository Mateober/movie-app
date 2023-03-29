export const renderImage = ({poster_path, title, name}) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
    if (poster_path) {
        return (
            <img src={`${imageBaseUrl}${poster_path}`} alt={title || name} />
        );
    } else {
        return (
            <div className="noImageDiv">
                <img src="../assets/noImage.svg" alt="no image" />
            </div>
        );
    }
};
