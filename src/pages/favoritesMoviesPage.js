import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateMovieListPage";

const FavoriteMoviesPage = props => {
  const toDo = () => true;

  return (
    <PageTemplate
      movies={StubAPI.getAll()}
      title={"Favourite Movies"}
      buttonHandler={toDo}
    />
  );
};

export default FavoriteMoviesPage;