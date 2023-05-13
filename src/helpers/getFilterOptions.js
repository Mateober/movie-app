import { getGenres } from '../api/api';

export const getFilterOptions = async (categoryType) => {
    const genres = await getGenres(categoryType);

    const sortOptions = [
        { value: 'popularity.desc', label: 'Popularity Descending', type: 'popularity' },
        { value: 'popularity.asc', label: 'Popularity Ascending', type: 'popularity' },
        { value: 'vote_average.desc', label: 'Rating Descending', type: 'rating' },
        { value: 'vote_average.asc', label: 'Rating Ascending', type: 'rating' },
        { value: 'release_date.desc', label: 'Release Date Descending', type: 'release' },
        { value: 'release_date.asc', label: 'Release Date Ascending', type: 'release' },
        { value: 'original_title.asc', label: 'Title (A-Z)', type: 'title' },
        { value: 'original_title.desc', label: 'Title (Z-A)', type: 'title' },
    ];

    const genreOptions = [
        ...genres.map((genre) => ({
            value: genre.id,
            label: genre.name,
        })),
    ];

    const options = {
        sort: sortOptions,
        genres: genreOptions,
    };

    return options;
};
