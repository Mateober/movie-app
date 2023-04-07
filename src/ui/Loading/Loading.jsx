import React from 'react';
import './loading.scss';

export const Loading = () => {
    return (
        <div className="div-loading">
            <div className="loading-container">
                <div className="wrapper">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                    <div className="shadow"></div>
                </div>
            </div>
        </div>
    );
};
