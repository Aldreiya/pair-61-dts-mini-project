import { Box, Button, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  let navigate = useNavigate();

    const onDetailsClick = (id) => {
        navigate(`/movie-details/${id}`);
    }
  return (
    <Card id={movie.id} sx={{ display: 'flex', width: 340, mt: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 200, height: 230 }}
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt="Movie poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Box
            sx={{
              width: 180,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
            <Box sx={{ ml: 1 }}>{movie.vote_average.toFixed(1)}</Box>
          </Box>
          <Box
            sx={{
              mt: 1,
              width: 150,
              display: 'flex',
              justifyContent: 'center',
            }}
          >

              <Button variant="contained" onClick={() => onDetailsClick(movie.id)}>
                Details
              </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default MovieCard;