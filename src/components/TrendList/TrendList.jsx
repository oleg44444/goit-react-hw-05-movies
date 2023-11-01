import { Link, useLocation } from 'react-router-dom';

import {
  TrendListContainer,
  TrendListItem,
  InfoContainer,
  ImageContainer,
  Title,
  Rating,
  OriginalTitle,
} from './TrendList.styled.js';
const TrendList = ({ searchResults }) => {
  const location = useLocation();
  return (
    <TrendListContainer>
      {searchResults.map(result => (
        <TrendListItem key={result.id}>
          <Link to={`/movies/${result.id}`} state={{ from: location }}>
            <ImageContainer>
              <img
                src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                alt={result.title}
              />
            </ImageContainer>
            <InfoContainer>
              <Title>Title: {result.title}</Title>
              <Rating>Rating: {result.vote_average}</Rating>
              <OriginalTitle>
                Original Title: {result.original_title}
              </OriginalTitle>
            </InfoContainer>
          </Link>
        </TrendListItem>
      ))}
    </TrendListContainer>
  );
};

export default TrendList;
