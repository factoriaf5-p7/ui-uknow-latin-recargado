import { useState, ChangeEvent } from 'react';
import './SearchBox.css';
import { searchContent } from '../../services/content.service';

interface Content {
    _id: string;
    title: string;
}

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = useState<string>(''); // pa´almacenar el valor del campo de búsqueda
    const [searchResults, setSearchResults] = useState<Content[]>([]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value; // Obtener el valor del campo de búsqueda
        setSearchQuery(query); // Actualizar el estado de búsqueda con el valor del campo de búsqueda

        // Realizar la solicitud al servidor con el valor de búsqueda
        if (query) { // Si el campo de búsqueda no está vacío
           searchContent(query)
           .then((data) => setSearchResults(data)) // Actualizar el estado de resultados de búsqueda con los resultados de búsqueda
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
