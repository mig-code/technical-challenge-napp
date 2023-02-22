import { useState } from 'react';

export function SearchBox() {
    const initialSearchQuery = '';
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

    const handleInput = (ev) => {
        const searchInput = ev.target;
        setSearchQuery(searchInput.value);
        console.log(searchQuery);
    };
    return (
        <div>
            <label htmlFor="search"></label>
            <input
                type="text"
                name="search"
                id="search"
                value={searchQuery}
                onInput={handleInput}
                placeholder="Encuentra tu móvil..."
            />
        </div>
    );
}
