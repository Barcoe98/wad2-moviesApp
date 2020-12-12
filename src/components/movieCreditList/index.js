import React from "react";
import MovieCredit from "../movieCreditCard";
import "./movieCreditList.css";

const MovieCreditList = ({movieCredit}) => {
  const movieCreditCards = movieCredit.map(mc => (
    <MovieCredit key={mc.id} movieCredit={mc}/>
  ));
  return <div className="row movieCredits">{movieCreditCards}</div>;
};

export default MovieCreditList;