import { fetchReviews } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchReviews(movieId);
        setAuthors(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {authors.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {authors.map(author => (
            <li key={author.author_details.username}>
              <p>Author: {author.author_details.username}</p>
              <p>{author.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
