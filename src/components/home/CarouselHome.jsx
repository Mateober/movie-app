import Slider from 'react-slick';
import { CarouselCardHome } from './CarouselCardHome';
import './carouselHome.scss';

export const CarouselHome = ({ movies }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,
        arrows: false,
    };
    return (
        <>
            <div>
                <Slider {...settings}>
                    {movies.map((movie) => (
                        <CarouselCardHome movie={movie} />
                    ))}
                </Slider>
            </div>
        </>
    );
};
