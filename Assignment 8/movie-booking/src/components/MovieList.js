import React from 'react';
import { Link } from 'react-router-dom';
const movies = [
  { id: 1, name: 'Movie 1', image: '/images/movie1.png' },
  { id: 2, name: 'Movie 2', image: '/images/movie2.png' },
];
function MovieList() {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <img src={movie.image} alt={movie.name} />
          <h2>{movie.name}</h2>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;