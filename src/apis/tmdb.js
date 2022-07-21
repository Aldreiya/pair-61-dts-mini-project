import axios from 'axios';

const API_KEY = 'bf2ecde5d24a98e290c191a9589bfefc';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
