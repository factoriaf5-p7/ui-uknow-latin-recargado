import React, { useState, ChangeEvent } from 'react';
import './SearchBox.css';

interface Content {
    _id: string;
    title: string;
}

const SearchBox: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Content[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Realizar la solicitud al servidor con el valor de búsqueda
        if (query) {
            fetch(`http://localhost:3000/api/V1/content/search/content?query=${encodeURIComponent(query)}`)
                .then((response) => response.json())
                .then((data) => setSearchResults(data))
                .catch((error) => console.error('Error al realizar la búsqueda:', error));
        } else {
            setSearchResults([]); // Limpiar los resultados si el campo de búsqueda está vacío
        }
    };

    // Función para manejar el clic en un resultado y redireccionar a la página de detalles
    const handleResultClick = (contentId: string) => {
        window.location.href = `/content/${contentId}`;
    };

    return (
        <div className="search-box">
            <label className="search-input" htmlFor="searchInput">
                <input
                    type="text"
                    id="searchInput"
                    className={`form-control ${searchQuery && 'has-value'}`}
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </label>
            {searchResults.length > 0 && (
                <div className="search-results">
                    <ul className="list-group">
                        {searchResults.map((result) => (
                            <li
                                key={result._id}
                                className="list-group-item list-group-item-action"
                                onClick={() => handleResultClick(result._id)}
                                style={{ cursor: 'pointer' }}
                            >
                                {result.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBox;
