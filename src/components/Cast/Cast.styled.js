import styled from '@emotion/styled';

export const CastContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const ActorItem = styled.li`
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #fff;
`;

export const ActorImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px 8px 0 0;
`;

export const ActorName = styled.p`
  margin: 0;
  font-size: 16px;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

export const ActorCharacter = styled.p`
  margin: 0;
  font-size: 14px;
  padding: 10px;
  text-align: center;
`;
