import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTk1N2E0ZjgzNjI3YmE2NzE2NjQ1NGFhYThkNDY0MiIsIm5iZiI6MTczNDA5ODc2Ni40MTYsInN1YiI6IjY3NWMzZjRlZjkzMmRjNzcxNjI2ZTUzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0soPz7zACW1URQfEFfnEXNp1A3RpiZQ0mGisPYqVVb8`,
  },
});

export default api;