import { useState, useEffect } from 'react';
import { fetchCast } from 'API/API';
import { useParams } from 'react-router-dom';
import {
  CastContainer,
  ActorItem,
  ActorImage,
  ActorName,
  ActorCharacter,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCast(movieId);

        setActors(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <CastContainer>
      {actors.map(actor => (
        <ActorItem key={actor.id}>
          <ActorImage
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
            alt={actor.name}
          />
          <ActorName>{actor.name}</ActorName>
          <ActorCharacter>{actor.character}</ActorCharacter>
        </ActorItem>
      ))}
    </CastContainer>
  );
};
export default Cast;
