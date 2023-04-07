import React from 'react';
import { getColor } from './../../helpers/getColor';
import './circle.scss';

export const Circle = ({ vote_average }) => {
    const ratingColor = getColor(vote_average);
    let rating = Math.round(vote_average * 10);

    if (rating === 0) {
        rating = 'NR';
    }

    const styleRating = {
        background: ratingColor,
    };

    return (
        <div className="circulo1">
            <div className="circulo2" style={styleRating}>
                <div className="circulo3">
                    <p>
                        {rating}
                        {rating !== 'NR' && <span className="porciento">%</span>}
                    </p>
                </div>
            </div>
        </div>
    );
};
