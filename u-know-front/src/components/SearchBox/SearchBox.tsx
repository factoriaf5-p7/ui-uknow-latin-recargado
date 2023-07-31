import { useState, ChangeEvent } from 'react';
import './SearchBox.css';
import ShowContent from '../ShowContent/ShowContent';

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
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
            <ShowContent searchQuery={searchQuery} />
        </div>
    );
};

export default SearchBox;
