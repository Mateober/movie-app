import React from 'react';
import './footer.scss';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export const Footer = () => {
    return (
        <div className="footer">
            <p>© 2023 Copyright | Proyecto creado por Mateo Bertello</p>
            <div>
                <a className="logos" target="_blank" href="https://www.linkedin.com/in/mateo-bertello/">
                    <AiFillLinkedin />
                </a>
                <a className="logos" target="_blank" href="https://github.com/Mateober">
                    <AiFillGithub />
                </a>
            </div>
        </div>
    );
};
