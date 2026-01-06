import { MovieList } from "../components/movies";
import { useState, useEffect, useContext } from "react";
import * as TmdbService from '../services/tmdb-service';
import { PosterContext } from "../context/poster-context";
import { ToggleContext } from "../context/toggle-context";

const movies = TmdbService.favoriteMovies;

function FavoritePage() {
    const [favoriteMovie, setFavoriteMovie] = useState([]);
    const { setPoster } = useContext(PosterContext);
    const { toggle } = useContext(ToggleContext);
    console.log(toggle)

    useEffect(() => {
        async function arrayMovies() {
            const favoriteMovies = await Promise.all(movies.map((movie) => (TmdbService.getMovie(movie))));
            setFavoriteMovie(favoriteMovies);
        }
        arrayMovies();
        setPoster({back: null, detail: false, home: true});
    }, [toggle]);

    return (
        <div>
            {TmdbService.favoriteMovies.length === 0 && <div>There is no favorite movies yet!!</div>}
            {favoriteMovie && <MovieList movie={favoriteMovie}/>}
        </div>
    );
}

export default FavoritePage;