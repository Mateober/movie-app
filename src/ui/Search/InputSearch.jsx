import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { windowScrollUp } from '../../helpers/windowScrollUp';

export const InputSearch = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
        windowScrollUp()
    };

    return (
        <form className="search" onSubmit={handleSubmit}>
            <FaSearch className="search-icon" />
            <input
                className="search-input"
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search movies..."
            />
        </form>
    );
};
