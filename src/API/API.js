import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=177d4c1777884d0207a8f9260a3ed0b2'
    );
    return response.data.results; // Повернути масив фільмів з відповіді
  } catch (error) {
    throw error; // Передати помилку вище для обробки в компоненті
  }
};
export const fetchMovieData = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=1&language=en-US`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzdkNGMxNzc3ODg0ZDAyMDdhOGY5MjYwYTNlZDBiMiIsInN1YiI6IjY1MzBmODQzMTEwOGE4MDBjOWI1ZDdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7jYvvySJFvZSG-WbSK1ZGl3FBUiXQ3Hl8nNqDdI8jQE',
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
