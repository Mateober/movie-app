import React from "react";
import "./peopleCard.scss"

export const PeopleCard = ({ person }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className="people-card animate__animated animate__fadeIn">
            <div className="people-image">
                {person.profile_path ? (
                    <img
                        src={imageBaseUrl + person.profile_path}
                        alt={person.name}
                    />
                ) : (
                    <div className="noImageDiv">
                        <img src="../assets/noImage.svg" alt="no image" />
                    </div>
                )}
            </div>
            <div className="people-name">
                <p>{person.name}</p>
            </div>
        </div>
    );
};
