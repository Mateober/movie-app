import MovieCard from "./MovieCard";

export const MoviesList = ({ movies }) => {
    return (
        <div className="container-movies">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
