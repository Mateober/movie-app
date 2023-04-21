import './actor.scss';

export const ActorsCard = ({ actor }) => {
    const profilePathUrl = 'https://image.tmdb.org/t/p/w500/';
    const renderImage = () => {
        if (actor.profile_path) {
            return <img src={`${profilePathUrl}${actor.profile_path}`} alt="" />;
        } else {
            return (
                <div className="noImageDivActor">
                    <img src="../../../assets/noImage.svg" alt="no image" />
                </div>
            );
        }
    };
    return (
        <>
            {renderImage()}
            <div className='actorCard__info'>
                <p className="actorCard__info--name">{actor.name}</p>
                <p className="actorCard__info--character">{actor.character}</p>
            </div>
        </>
    );
};
