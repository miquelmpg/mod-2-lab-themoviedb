import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as TmdbService from '../services/tmdb-service';
import {useState, useEffect, useContext} from 'react';
import { PosterContext } from '../context/poster-context';

const movies = TmdbService.favoriteMovies;

function GraphPage() {

        const [favoriteMovie, setFavoriteMovie] = useState([]);
        const { setPoster } = useContext(PosterContext);
        
        useEffect(() => {
            async function arrayMovies() {
                const favoriteMovies = await Promise.all(movies.map((movie) => (TmdbService.getMovie(movie))));
                setFavoriteMovie(favoriteMovies);
            }
            arrayMovies();
            setPoster({back: null, detail: false, home: true});
        }, []);
    return (
                <BarChart
                    width={800}
                    height={400}
                    data={favoriteMovie}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="vote_average" fill="#8884d8" />
                </BarChart>
    );
}

export default GraphPage;