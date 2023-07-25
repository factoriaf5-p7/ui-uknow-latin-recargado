import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchBox.css';

const SearchBox: React.FC = () => {
    return (
        <div className="search-box">
            <button className="search-button">
                <div className="icon-container">
                    <BiSearch size={24} color="#333" />
                </div>
            </button>
            <input type="text" placeholder="Buscar..." />
        </div>
    );
};

export default SearchBox;
