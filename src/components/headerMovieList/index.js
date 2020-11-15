import React from "react";
import "./headerMovieList.css";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row">
      <div className="offset-4">
        <h2 className="h2-title">
          {`${title } `}
          <span className="badge badge-pill">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;