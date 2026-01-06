import { useNavigate } from 'react-router';
import * as TmdbService from '../../../services/tmdb-service'
import MovieLabel from '../movie-label/movie-label';
import MovieList from '../movie-list/movie-list';
import { useEffect, useContext } from 'react';
import { ToggleContext } from '../../../context/toggle-context';

function MovieItem({ id, poster_path, title, vote_average, release_date, overview, genres, trailer, recommendation, imdb_id, home, detail }) {
    const navigate = useNavigate();
    const navigateImdId = useNavigate();
    const { toggle, setToggle } = useContext(ToggleContext);

    useEffect(() => {
    }, [toggle])

    function goToDetailMovie() {
        navigate(`/${id}`);
    }
    
    function goToImdbId() {
        navigateImdId(`https://www.imdb.com/es-es/title/${imdb_id}`)
    }

    function storeMovie(id) {
        !TmdbService.favoriteMovies.includes(id) ? TmdbService.favoriteMovies.push(id) : TmdbService.favoriteMovies.splice(TmdbService.favoriteMovies.indexOf(id), 1);
        TmdbService.store();
        setToggle((prev) => !prev);
    }

    function isFavorite(id) {
        return TmdbService.favoriteMovies.includes(id) ? 'red' : 'black'
    }

    return (
        <>
            {home &&    <div 
                            className="border border-black border-2 rounded align-content-end p-2"
                            style={{backgroundImage: `Url(${TmdbService.postersBaseUrl}${poster_path})`, 
                                    width: '200px', 
                                    minHeight: '300px', 
                                    backgroundSize: 'cover', backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    position: 'relative'}}>
                            <div onClick={() => storeMovie(id)}><i role='button' className='fa fa-heart' style={{color: `${isFavorite(id)}`, position: 'absolute', top:'-10px', right: '-10px'}}></i></div>
                            <div onClick={() => goToDetailMovie()}
                                role='button'
                                className="d-flex justify-content-between"
                                style={{color: '#ffffff'}}>
                                <div>{title}</div>
                                <div>{vote_average.toFixed(1)}</div>
                            </div>
                        </div>}

            {detail &&  <div className='d-flex flex-column p-3 gap-1'>
                            <div className='d-flex'>
                                <div
                                    className="border border-black border-2 rounded align-content-end p-2"
                                    style={{backgroundImage: `Url(${TmdbService.postersBaseUrl}${poster_path})`, 
                                            minWidth: '200px', 
                                            minHeight: '300px', 
                                            backgroundSize: 'cover', backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            position: 'relative'}}>
                                        <div onClick={() => storeMovie(id)}><i role='button' className='fa fa-heart' style={{color: `${isFavorite(id)}`, position: 'absolute', top:'-10px', right: '-10px'}}></i></div>
                                    <div className="d-flex justify-content-between"
                                        style={{color: '#ffffff'}}>
                                        <div>{title}</div>
                                        <div>{vote_average.toFixed(1)}</div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-2 ps-4'>
                                    <h2>{title}</h2>
                                    <div className='d-flex gap-2'>
                                        <MovieLabel>{release_date}</MovieLabel>
                                        <i className="fa fa-imdb" style={{color: '#f5c518', fontSize: '24px'}} role="button" onClick={() => goToImdbId()}></i>
                                    </div>
                                    <div style={{fontSize: '20px'}}>{overview}</div>
                                    <div><i className="fa fa-star" style={{color: '#f5c518'}}></i>{vote_average.toFixed(1)}</div>
                                    <div className='d-flex gap-3'>{genres.map((genre) => <div key={genre.id}><MovieLabel>{genre.name}</MovieLabel></div>)}</div>
                                </div>
                            </div>
                            {trailer.length !== 0 && <div className='fs-2 fw-semibold'>Trailers</div>}
                            <div className='d-flex flex-column'>
                                <div className='d-flex gap-2'>
                                    {trailer && trailer.map((trailer) => <iframe key={trailer.key} 
                                                                                        src={`${TmdbService.YoutubeBaseUrl}${trailer.key}`}
                                                                                        style={{width: '50%', height: '400px'}}>
                                    </iframe>)}
                                </div>
                                <div>
                                    <MovieList genre={recommendation.length === 0 ? '' : 'Recommendation'} movie={recommendation}/>
                                </div>
                            </div>
                        </div>}
        </>
    );
}

export default MovieItem;