import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  background-color: #111;
  color: #fff;
  padding: 20px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #e50914;
  font-size: 18px;
  margin-bottom: 20px;
  display: inline-block;
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 0 auto;
  display: block;
`;

export const MovieTitle = styled.h1`
  font-size: 24px;
  margin: 20px 0;
`;

export const UserScore = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

export const Overview = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;

export const Genres = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Genre = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const AdditionalInfo = styled.ul`
  list-style: none;
  margin-top: 20px;
`;

export const AdditionalInfoItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CastLink = styled(Link)`
  text-decoration: none;
  color: #e50914;
`;

export const ReviewsLink = styled(Link)`
  text-decoration: none;
  color: #e50914;
`;

export const LoadingMessage = styled.p`
  font-size: 20px;
  text-align: center;
`;
