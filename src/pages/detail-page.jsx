import { useParams } from "react-router";
import * as TmdbService from '../services/tmdb-service'; 
import { useEffect, useState, useContext } from "react";
import { MovieItem } from "../components/movies";
import { PosterContext } from "../context/poster-context";

function DetailPage() {
    const [movie, setMovie] = useState();
    const { movieId } = useParams();
    const { setPoster } = useContext(PosterContext);
    console.log(movie)

    useEffect(() => {
        async function getMovieDetail() {
            const movieDetail = await TmdbService.getMovie(movieId);
            const trailer = await TmdbService.getTrailers(movieId);
            const recommendations = await TmdbService.getRecommendation(movieId);
            console.log(recommendations)
            setMovie({...movieDetail, trailer: trailer, recommendation: recommendations, detail: true, home: false});
            setPoster({back: movieDetail.backdrop_path, title: movieDetail.title});
        }
        getMovieDetail();
    }, [movieId]);

    return (
        <>
            {movie && <MovieItem {...movie}/>}
        </>
    );
}

export default DetailPage;