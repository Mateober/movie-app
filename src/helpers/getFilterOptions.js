import { getGenres } from "../api/api";

export const getFilterOptions = async (categoryType) => {
    const genres = await getGenres(categoryType);

    const sortOptions = [
        { value: "popularity.asc", label: "Popularidad ascendente", type: "popularity" },
        { value: "popularity.desc", label: "Popularidad descendente", type: "popularity" },
        { value: "vote_average.asc", label: "Calificación ascendente", type: "rating" },
        { value: "vote_average.desc", label: "Calificación descendente", type: "rating" },
        { value: "release_date.asc", label: "Fecha de lanzamiento ascendente", type: "release" },
        { value: "release_date.desc", label: "Fecha de lanzamiento descendente", type: "release" },
        { value: "original_title.asc", label: "Título (A-Z)", type: "title" },
        { value: "original_title.desc", label: "Título (Z-A)", type: "title" },
      ];

    const genreOptions = [
        { value: null, label: "Seleccionar género" },
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
