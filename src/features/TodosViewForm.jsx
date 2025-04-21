function TodosViewForm({
                           sortField,
                           setSortField,
                           sortDirection,
                           setSortDirection,
                           queryString,
                           setQueryString,
                       }) {

    const handleSortFieldChange = (e) => setSortField(e.target.value);
    const handleSortDirectionChange = (e) => setSortDirection(e.target.value);
    const handleSearchChange = (e) => setQueryString(e.target.value);
    const handleClearSearch = () => setQueryString('');

    return (
        <div>
            <div>
                <label htmlFor="searchTodos">Search todos:</label>
                <input
                    type="text"
                    id="searchTodos"
                    value={queryString}
                    onChange={handleSearchChange}
                />
                <button type="button" onClick={handleClearSearch}>
                    Clear
                </button>
            </div>


            <form onSubmit={e=> e.preventDefault()}>
                <div>
                    <label htmlFor="sortField">Sort by</label>
                    <select
                        id="sortField"
                        value={sortField}
                        onChange={handleSortFieldChange}
                    >
                        <option value="title">Title</option>
                        <option value="createdTime">Time added</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="sortDirection">Direction</label>
                    <select
                        id="sortDirection"
                        value={sortDirection}
                        onChange={handleSortDirectionChange}
                    >
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default TodosViewForm