import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";

const MovieCard = ({movie, action}) => {

  return (
    <div className="col-sm-2">
      <div className="card">
      <div className="container">
      
        <Link to={`/movies/${movie.id}`}>
      <img
      className="card-img-tag center"
      alt={movie.title}
      src={
      movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : "./film-poster-placeholder.png"
      }
      />
      </Link>
      <h4 className="card-title-m">{movie.title}</h4>
      {action(movie)}
      </div>
      </div>
    </div>
  );
};

export default MovieCard;