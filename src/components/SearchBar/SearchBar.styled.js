import styled from '@emotion/styled';

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff3e46;
  }
`;
