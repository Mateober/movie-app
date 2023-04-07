import React from 'react';
import ReactDOM from 'react-dom/client';
import { MovieApp } from './MovieApp';
import './index.css';
import '../src/sass/containers.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <MovieApp />
    //</React.StrictMode>
);
