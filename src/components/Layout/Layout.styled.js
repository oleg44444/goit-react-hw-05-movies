import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  background-color: #141414;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

export const Header = styled.header`
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 20px;
      a {
        text-decoration: none;
        color: white;
        font-size: 18px;
        &:hover {
          border-bottom: 2px solid #e50914;
        }
      }
    }
  }
`;

export const Main = styled.main`
  max-width: 1200px;
  width: 100%;
`;
