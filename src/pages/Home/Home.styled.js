import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #000;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

export const MovieItem = styled.li`
  margin: 10px;
  width: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
`;

export const MovieTitle = styled.p`
  font-size: 16px;
  padding: 10px;
  color: #fff;
`;
