import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import tmdb from '../apis/tmdb';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [moviesReady, setMoviesReady] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("trending/movie/week");
                setMovies(fetchedMovies.data.results);
                setMoviesReady(true);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
        }}>
            <Typography variant="h5" sx={{ml:2}}>Trending Movie</Typography>
            <Divider variant="middle" />
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                mb:2,
            }}>
                {
                    movies.map(movie => (
                        <MovieCard key={movie.title} movie={movie}></MovieCard>
                    ))
                }
            </Box>
        </Box>
    );
}

export default MovieList;
