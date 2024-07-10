import React from 'react';
import { Link, useParams } from 'react-router-dom';
const movies = [
  { id: 1, name: 'Movie 1', description: 'Gru welcomes a new member to the family, Gru Jr., whos intent on tormenting his dad. However, their peaceful existence soon comes crashing down when criminal mastermind Maxime Le Mal escapes from prison and vows revenge against Gru.', image: '/images/movie1.png' },
  { id: 2, name: 'Movie 2', description: 'Exhuma (Korean: 파묘) is a 2024 South Korean supernatural horror film written and directed by Jang Jae-hyun, and starring Choi Min-sik, Kim Go-eun, Yoo Hae-jin and Lee Do-hyun. The film includes mystery and occult elements, and follows the process of excavating an ominous grave, which unleashes dreadful consequences buried underneath.', image: '/images/movie2.png' },
];
function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));
  return (
    <div className="movie-details">
      <img src={movie.image} alt={movie.name} />
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>Book Seat</Link>
    </div>
  );
}
export default MovieDetails;