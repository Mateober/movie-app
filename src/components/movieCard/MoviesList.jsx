import MovieCard from './MovieCard';

export const MoviesList = ({ movies }) => {
    return (
        <>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </>
    );
};
