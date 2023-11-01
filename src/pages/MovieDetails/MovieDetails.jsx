import { useRef, useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieData } from 'API/API';
import {
  MovieDetailsContainer,
  BackLink,
  MoviePoster,
  MovieTitle,
  UserScore,
  Overview,
  Genres,
  Genre,
  AdditionalInfo,
  AdditionalInfoItem,
  CastLink,
  ReviewsLink,
  LoadingMessage,
} from './MovieDetails.styled.js';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await fetchMovieData(movieId);
        setMovie(movieData);
        console.log(movieData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <BackLink to={backLocationRef.current}>Go BACK</BackLink>
      {movie ? (
        <div>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieTitle>{movie.title}</MovieTitle>
          <UserScore>User score: {movie.vote_average}</UserScore>
          <h2>Overview </h2>
          <Overview>{movie.overview}</Overview>
          <h3>Genres</h3>
          <Genres>
            {movie.genres.map(genre => (
              <Genre key={genre.id}>{genre.name}</Genre>
            ))}
          </Genres>

          <AdditionalInfo>
            Additional information
            <AdditionalInfoItem>
              <CastLink to="cast" state={{ from: location }}>
                Cast
              </CastLink>
            </AdditionalInfoItem>
            <li>
              <ReviewsLink to="reviews" state={{ from: location }}>
                Reviews
              </ReviewsLink>
            </li>
          </AdditionalInfo>
          <Outlet />
        </div>
      ) : (
        <LoadingMessage>Loading...</LoadingMessage>
      )}
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
