import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchSearchFilms } from 'API/API';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchResults, setSearchResults] = useState([]); // Виправлено ім'я стейту

  const onChangeValue = e => {
    const inputValue = e.target.value;
    if (inputValue !== '') {
      setSearchParams({ query: inputValue });
    } else {
      setSearchParams({});
    }
  };

  const searchFilms = async () => {
    try {
      const responce = await fetchSearchFilms(query);
      setSearchResults(responce.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={onChangeValue}
        placeholder="Enter a movie title"
      />
      <button className="button" onClick={searchFilms}>
        Search
      </button>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>
              <Link to={`/movies/${result.id}`}>
                {result.original_title}

                <p>Release Date: {result.release_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Movies;
