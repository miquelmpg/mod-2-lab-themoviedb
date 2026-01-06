function Search({ search, getSearch }) {
    return (
        <nav className="navbar" >
            <div className="mx-auto" style={{width: '100%'}}>
                <div className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(event) => getSearch(event.target.value)}/>
                </div>
            </div>
        </nav>
    );
}

export default Search;