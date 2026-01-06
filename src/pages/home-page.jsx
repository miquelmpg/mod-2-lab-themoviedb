import { useState, useEffect, useContext } from "react";
import * as TmdbService from '../services/tmdb-service'
import { MovieList } from '../components/movies';
import { PosterContext } from "../context/poster-context";

const params = {
            genre: 28,
            sortBy: 'popularity',
            fromReleaseDate: '2025-01-01',
            limit: 6
        }

function HomePage() {
    const [movie, setMovie] = useState([]);
    const { setPoster } = useContext(PosterContext);

    useEffect(() => {
        async function fetchMovie() {
            const movieAction = await TmdbService.listMovies(params);
            const movieDrama = await TmdbService.listMovies({...params, genre: 18});
            const movieComedy = await TmdbService.listMovies({...params, genre: 35});
            setMovie([movieAction, movieDrama, movieComedy]);
        }
        setPoster({back: null, detail: false, home: true});
        fetchMovie();
    }, []);

    return (
        
        <div className="d-flex flex-column">
            <MovieList genre={'Best of Action'} movie={movie[0]}/>
            <MovieList genre={'Best of Drama'} movie={movie[1]}/>
            <MovieList genre={'Best of Comedy'} movie={movie[2]}/>
        </div>
    );
}

export default HomePage;