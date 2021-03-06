import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

const WatchListMoviesPage = () => {
  const context = useContext(MoviesContext);
  const watchList = context.upcoming.filter( m => m.watchlist )


  return (
    <MovieListPageTemplate
      movies={watchList}
      title={"Watch List Movies"}
      action={movie => <AddReviewButton movie={movie} />} />
  );
};

export default WatchListMoviesPage;