import {
  ReviewList,
  ReviewContent,
  ReviewItem,
  AuthorUsername,
  NoReviewsMessage,
  ReviewsContainer,
} from './Reviews.styled.js';
import { fetchReviews } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
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
    <ReviewsContainer>
      {authors.length === 0 ? (
        <NoReviewsMessage>
          We don't have any reviews for this movie.
        </NoReviewsMessage>
      ) : (
        <ReviewList>
          {authors.map(author => (
            <ReviewItem key={author.author_details.username}>
              <AuthorUsername>
                Author: {author.author_details.username}
              </AuthorUsername>
              <ReviewContent>{author.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewList>
      )}
    </ReviewsContainer>
  );
};
export default Reviews;
