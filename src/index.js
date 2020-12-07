import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app.css"
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       
import WatchListMoviesPage from './pages/watchListMoviesPage'       
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import TopRatedMoviesPage from './pages/topRatedMoviesPage'
import PopularMoviesPage from './pages/popularMoviesPage'
import nowPlayingMoviesPage from './pages/nowPlayingMoviesPage'

import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

const App = () => {
  return (
    <div className = "page-temp">
    <BrowserRouter>
    <div className ="page-template">
      <SiteHeader /> 
      <div className="container-fluid">
        <MoviesContextProvider> 
        <GenresContextProvider>    
            <Switch>
              <Route path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route path="/movies/watchlist" component={WatchListMoviesPage} />
              <Route path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route path="/movies/nowplaying" component={nowPlayingMoviesPage} />
              <Route path="/movies/toprated" component={TopRatedMoviesPage} />
              <Route path="/movies/popular" component={PopularMoviesPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider>    
          </MoviesContextProvider>     
        </div>
      </div>
      </BrowserRouter>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));