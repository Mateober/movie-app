import './carouselHome.scss';

export const CarouselHome = ({ movies }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 2,
    };
    return (
        <>
{/*         <div>
            {movies.map((movie) => (
                <div>{movie.title}</div>
            ))}
        </div> */}
        <div className='carouselDiv'>

        </div>        
        </>

    );
};
