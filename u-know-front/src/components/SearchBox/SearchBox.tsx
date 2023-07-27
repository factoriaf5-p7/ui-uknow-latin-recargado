import React, { useState, ChangeEvent } from 'react';
import { BiSearch } from 'react-icons/bi';
import './SearchBox.css';

interface Content {
    _id: string;
    title: string;
    // Otras propiedades que existan en la estructura de Content
}

const SearchBox: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Content[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Realiza la solicitud al servidor con el valor de búsqueda
        fetch(`http://localhost:3000/api/V1/content/search/content?query=${encodeURIComponent(query)}`)
            .then((response) => response.json())
            .then((data) => setSearchResults(data))
            .catch((error) => console.error('Error al realizar la búsqueda:', error));
    };

    return (
        <div className="search-box">
            <div className="search-button">
                <div className="icon-container">
                    <BiSearch size={24} color="#333" />
                </div>
            </div>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={handleInputChange}
            />
            {searchResults.length > 0 && (
                <div className="search-results">
                    <h2>Resultados de la búsqueda:</h2>
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result._id}>{result.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBox;