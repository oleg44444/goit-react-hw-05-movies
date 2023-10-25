import axios from 'axios';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=177d4c1777884d0207a8f9260a3ed0b2'
    );
    return response.data.results;
  } catch (error) {
    throw error;
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
export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
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

export const fetchReviews = async movieId => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzdkNGMxNzc3ODg0ZDAyMDdhOGY5MjYwYTNlZDBiMiIsInN1YiI6IjY1MzBmODQzMTEwOGE4MDBjOWI1ZDdmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7jYvvySJFvZSG-WbSK1ZGl3FBUiXQ3Hl8nNqDdI8jQE',
    },
  };

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchSearchFilms = async query => {
  const options = {
    headers: {
      accept: 'application/json',
    },
    params: {
      api_key: '177d4c1777884d0207a8f9260a3ed0b2',
      query,
    },
  };

  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      options
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
