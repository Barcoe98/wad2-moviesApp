import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddToWatchListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchList = e => {
    e.preventDefault();
    context.addToWatchList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn"
      onClick={handleAddToWatchList}
    >
      Add to Watch List
    {/* <FontAwesomeIcon icon={["fas", "star"]} /> */}
    </button>
  );
};

export default AddToWatchListButton;