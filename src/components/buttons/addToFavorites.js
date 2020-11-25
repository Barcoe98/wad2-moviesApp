import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
  };
  
  return (
    <button
      type="button"
      className="btn"
      onClick={handleAddToFavorite}
    >
      Add to Favourites
      {/* <FontAwesomeIcon icon={["fas", "star"]} /> */}
    </button>
  );
};

export default AddToFavoriteButton;