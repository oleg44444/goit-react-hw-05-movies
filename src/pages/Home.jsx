import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Імпортуємо Link з React Router
import { fetchMovies } from 'API/API'; // Переконайтеся, що шлях до вашого модулю API правильний

const Home = () => {
  const [movies, setMovies] = useState([]);

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
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
