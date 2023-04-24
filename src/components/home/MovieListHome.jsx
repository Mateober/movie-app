import MovieCard from '../movieCard/MovieCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './movieHomeCard.scss';
import { MovieHomeCard } from './movieHomeCard';

export const MovieListHome = ({ moviesArray, title }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        className: 'center',
        swipeToSlide: true,
        className: 'sliderDiv',
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <div className="list">
            <h2>{title}</h2>
            <Slider {...settings}>
                {moviesArray.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Slider>
        </div>
    );
};
