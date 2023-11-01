import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Імпортуємо Link з React Router
import { fetchMovies } from 'API/API'; // Переконайтеся, що шлях до вашого модулю API правильний
import {
  MovieLink,
  MovieItem,
  MovieList,
  Title,
  HomeContainer,
  MovieTitle,
  MovieImage,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Використовуйте async/await для отримання даних зі споживача API
    const fetchData = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data); // Оновити стан компонента з отриманими фільмами
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <HomeContainer>
      <Title>Trending today</Title>
      <MovieList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </HomeContainer>
  );
};

export default Home;
