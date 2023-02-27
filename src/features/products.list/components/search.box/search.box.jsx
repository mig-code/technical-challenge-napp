export function SearchBox({ searchQuery, setSearchQuery }) {
    const handleInput = (ev) => {
        const searchInput = ev.target;
        setSearchQuery(searchInput.value);
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
