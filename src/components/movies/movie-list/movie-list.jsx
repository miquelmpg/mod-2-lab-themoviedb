import MovieItem from "../movie-item/movie-item";

function MovieList({ genre, movie }) {
    return (
        <>
            <div className="row fs-2 fw-semibold align-items-end" style={{height: '50px'}}>{genre}</div>
            <div className="row row-cols-6 gap-3 justify-content-start">
                {movie && (movie.map((movie) => <MovieItem key={movie.id} home {...movie}/>))}
            </div>
        </>
    );
}

export default MovieList;