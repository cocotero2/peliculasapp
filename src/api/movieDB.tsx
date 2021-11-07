import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b0a3f9e0d645760454c6bdf6f5018d99',
    languaje: 'es-ES',
  },
});

export default movieDB;
