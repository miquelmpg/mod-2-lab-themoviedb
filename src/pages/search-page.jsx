import { useState, useEffect, useContext } from "react";
import { Search } from "../components/ui";
import { MovieList } from "../components/movies";
import * as TmdbService from '../services/tmdb-service';
import { PosterContext } from "../context/poster-context";

function SearchPage() {
    const [search, setSearch] = useState("");
    const [movieFiltered, setMovieFiltered] = useState();
    const { setPoster } = useContext(PosterContext);
    
    useEffect(() =>{
        async function getMovieByWord() {
            const filteredList = await TmdbService.listMoviesBySearch(search);
            setMovieFiltered(filteredList);
        }
        getMovieByWord();
        setPoster({back: null, detail: false, home: true});
    }, [search]);

    function getSearch(word) {
        setSearch(word);
    }

    return (
        <>
            <Search search={search} getSearch={getSearch}/>
            <MovieList movie={movieFiltered}></MovieList>
        </>
    );
}

export default SearchPage;