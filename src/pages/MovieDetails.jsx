import { useEffect, useState } from 'react'; // Видалено дубльований імпорт
import { useParams } from 'react-router-dom';
import { fetchMovieData } from 'API/API';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null); // Змінено початковий стан на null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieData(movieId);
        setMovie(movieData);
        console.log(movieData); // Додано виведення даних про фільм після завантаження
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);
  console.log(movie);

  return (
    <div>
      {movie ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average}</p>
          <h2>Overview </h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>{}</p>
          <ul>
            Additional information
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetails;
