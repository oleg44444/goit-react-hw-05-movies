import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutContainer, Main, Header } from './Layout.styled';
export const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </LayoutContainer>
  );
};
