import MovieCard from '../movieCard/MovieCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './movieHomeCard.scss';
import { MovieCardHome } from './MovieCardHome';

export const MovieListHome = ({ moviesArray }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 9,
                },
            },
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 8,
                },
            },
            {
                breakpoint: 1390,
                settings: {
                    slidesToShow: 7,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1044,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 688,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 508,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="list animate__animated animate__fadeInLeft">
            <Slider {...settings}>
                {moviesArray.map((movie) => (
                    <MovieCardHome key={movie.id} movie={movie}/>
                ))}
            </Slider>
        </div>
    );
};
