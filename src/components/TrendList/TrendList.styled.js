import styled from '@emotion/styled';

export const TrendListContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Встановлюємо 6 колонок */
  grid-gap: 10px;
  padding: 20px 0;
  margin: 0;
`;

export const TrendListItem = styled.li`
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-decoration: none;
    color: #fff;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px 8px 0 0;
  }
`;

export const InfoContainer = styled.div`
  padding: 10px;
  font-size: 12px;
  width: 100%;

  p {
    margin: 0;
  }

  p:first-of-type {
    font-weight: bold;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

export const Rating = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export const OriginalTitle = styled.p`
  font-size: 14px;
`;
