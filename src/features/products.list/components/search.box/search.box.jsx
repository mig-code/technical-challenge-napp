import './search.box.scss';

export function SearchBox({ searchQuery, setSearchQuery }) {
    const handleInput = (ev) => {
        const searchInput = ev.target;
        setSearchQuery(searchInput.value);
    };
    return (
        <div className="search-box-container">
            <label htmlFor="search"></label>
            <input
                type="text"
                name="search"
                id="search"
                value={searchQuery}
                onInput={handleInput}
                placeholder="¿Qué modelo buscas?"
            />
        </div>
    );
}
