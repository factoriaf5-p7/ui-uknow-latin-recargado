import React, { useState, ChangeEvent } from 'react';
import { BiSearch } from 'react-icons/bi';
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
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result._id} onClick={() => handleResultClick(result._id)} style={{ cursor: 'pointer' }}>
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
