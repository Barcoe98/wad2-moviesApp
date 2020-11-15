import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./app.css"

import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import TopRatedMoviesPage from './pages/topRatedMoviesPage'
import PopularMoviesPage from './pages/popularMoviesPage'

import UpcomingTvShowsPage from './pages/upcomingTvShowsPage'
import TopRatedTvShowsPage from './pages/topRatedTvShowsPage'  
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
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route exact path="/movies/topRated" component={TopRatedMoviesPage} />
              <Route exact path="/movies/popular" component={PopularMoviesPage} />


              <Route exact path="/tvshows/topRated" component={TopRatedTvShowsPage} />
              <Route exact path="/tvshows/upcoming" component={UpcomingTvShowsPage} />

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