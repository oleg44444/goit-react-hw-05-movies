import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchSearchFilms } from 'API/API';

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

  const updateQueryString = e => {
    const newQuery = e.target.value.toLowerCase();
    setSearchParams({ query: newQuery });
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Введіть значення!!!');
    } else {
      setSearchParams({ query: query });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={query} onChange={updateQueryString}></input>
        <button className="submit">Пошук</button>
      </form>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>
              <Link to={`/movies/${result.id}`}>
                {result.original_title}
                <p>Дата виходу: {result.release_date}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Результати не знайдено.</p>
      )}
    </div>
  );
};

export default Movies;
