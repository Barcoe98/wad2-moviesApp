import React from "react";
import { Link } from "react-router-dom";
import "./movieCreditCard.css";
import "../../globals/fontawesome";

const MovieCreditCard = ({movieCredit}) => {

  return (
    <div className="col-2">
      <div className ="container">
          <Link to={`/actors/${movieCredit.id}`}>
        <img
        className="card-img-tag center"
        alt={movieCredit.original_title}
        src={
          movieCredit.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movieCredit.poster_path}`
        : "./film-poster-placeholder.png"
        }
        />
        </Link>
        <div class="text-block">
        <h5 className="card-title">{movieCredit.original_title}</h5>
        </div>
      </div>
   </div>
  );
};

export default MovieCreditCard;