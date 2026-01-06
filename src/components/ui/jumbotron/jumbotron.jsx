import { PosterContext } from '../../../context/poster-context';
import * as TmdbService from '../../../services/tmdb-service';
import { useContext } from 'react';

function Jumbotron({ detail, home }) {
    const { poster } = useContext(PosterContext);
    const { back, title } = poster;

    return (
        <div style={{width: '100%', 
                    height: '200px', 
                    backgroundImage: back ? `URL(${TmdbService.postersBaseUrl}${back})` : 'URL(https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1.png)', 
                    color: '#ffffff',
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'}}
            className="d-flex flex-column justify-content-center">
            {detail && <div className="mx-auto fs-2 fw-semibold" style={{width: '80%'}}>{title}</div>}
            {home && <>
                            <div className="mx-auto fs-2 fw-semibold" style={{width: '80%'}}>All the Movies You Love, All in One Place</div>
                            <div className="mx-auto" style={{width: '80%'}}>Dive into a world of movies — from timeless classics to the latest blockbusters...</div>
                        </>}        
        </div>
    );
}

export default Jumbotron;