import { Box, Button, Card, CardContent, CardMedia,  Rating, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import { useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";


const MovieDetails = () => {
    const [movies, setMovies] = useState([]);
    const [moviesReady, setMoviesReady] = useState(false);
    let params = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get(`/movie/${params.id}`);
                setMovies(fetchedMovies.data);
                setMoviesReady(true);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovies();
    }, []);

    return (
        <Box>
            <Button variant="contained" href="/" sx={{ mt: 1, ml: 1 }} startIcon={<ArrowBackIcon />}>
                Back
            </Button>
            <Card sx={{ minWidth: 345, margin: 1,  display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                    component="img"
                    sx={{ minWidth: 400, maxWidth: 300, objectFit: 'fill' ,display: 'flex'}}
                    image={`${BASE_IMAGE_URL}${movies.poster_path}`}
                    alt="Movie poster"
                />
                <CardContent sx={{display: 'flex', flexDirection: 'column'}} >
                    <Typography gutterBottom variant="h3" component="div">
                        {movies.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {`${movies.release_date}`}
                    </Typography>
                    <Box
                        sx={{
                            width: 180,
                            display: 'flex',
                            alignItems: 'center',
                            mb:2
                        }}
                    >
                        <Rating name="read-only" precision={0.1} value={movies.vote_average / 2} max={5} readOnly />
                        <Box sx={{ ml: 1 }}>{movies.vote_average?.toFixed(1)}</Box>
                    </Box>
                    
                    <Typography gutterBottom variant="body3" component="div">
                    {movies.tagline}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Overview
                    </Typography>
                    <Typography variant="body2">
                        {movies.overview}
                    </Typography>
                    
                </CardContent>
            </Card>
        </Box>
    );
}

export default MovieDetails;
