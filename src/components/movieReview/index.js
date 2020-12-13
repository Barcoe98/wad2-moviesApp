import React from "react";
import "./movieReview.css";


export default ({ review }) => {
  return (
    <>
      <h3 className ="rAuthor"> Review Author : {review.author} </h3>
      <p>{review.content} </p>
    </>
  );
};