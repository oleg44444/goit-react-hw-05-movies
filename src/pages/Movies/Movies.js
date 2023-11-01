import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchFilms } from 'API/API';
import SearchBarComponent from 'components/SearchBar/SearchBar';
import TrendListComponent from 'components/TrendList/TrendList';
import { MoviesContainer } from './Movies.styled';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSearchFilms(query);
        setSearchResults(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [query]);

  const onSubmitForm = query => {
    setSearchParams({ query });
  };

  return (
    <MoviesContainer>
      <SearchBarComponent onSubmit={onSubmitForm} className="search-bar" />
      <div>
        {searchResults.length > 0 ? (
          <TrendListComponent
            searchResults={searchResults}
            className="trend-list"
          />
        ) : (
          <p>Not found</p>
        )}
      </div>
    </MoviesContainer>
  );
};

export default Movies;
