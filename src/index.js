import React from 'react';
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
import ActorsPage from './pages/actorsPage'
import ActorPage from './pages/actorDetailsPage'


import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import AddMovieReviewPage from './pages/addMovieReviewPage'

import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AuthContextProvider from "./contexts/authContext";
import ActorsContextProvider from "./contexts/actorsContext";

import LoginPage from './pages/loginPage'
import SignUpPage from './pages/SignUpPage'
import DashboardPage from './pages/dashboardPage'
import ForgotPasswordPage from './pages/forgotPasswordPage'
import UpdateProfilePage from './pages/updateProfilePage'
import PrivateRoute from './pages/privateRoute';

const App = () => {
  return (
    <div className = "page-temp">
    <BrowserRouter>
    <div className ="page-template">
      <div className="container-fluid">
        <AuthContextProvider>
        <SiteHeader /> 
        <MoviesContextProvider> 
        <ActorsContextProvider>
        <GenresContextProvider>    
            <Switch>
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route exact path="/movies/watchlist" component={WatchListMoviesPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route exact path="/movies/nowplaying" component={nowPlayingMoviesPage} />
              <Route exact path="/movies/toprated" component={TopRatedMoviesPage} />
              <Route exact path="/movies/popular" component={PopularMoviesPage} />
              <Route exact path="/actors/popular" component={ActorsPage} />
              <Route path="/actors/:id" component={ActorPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} /> 
              <Route path="/forgot-password" component={ForgotPasswordPage} /> 
              <Route exact path="/dashboard" component={DashboardPage}/>
              <Route exact path="/update-profile" component={UpdateProfilePage}/>
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
          </Switch>
          </GenresContextProvider> 
          </ActorsContextProvider>   
          </MoviesContextProvider>  
          </AuthContextProvider>   
        </div>
      </div>
      </BrowserRouter>
      </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));