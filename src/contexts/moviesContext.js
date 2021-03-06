import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRatedMovies, getPopularMovies, getNowPlayingMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated],
        popular: [...state.popular], 
        nowPlaying: [...state.nowPlaying]
      };

    case "add-watchlist":
        return {
          upcoming: state.upcoming.map((m) =>
            m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
          ),
          movies: [...state.movies],
          topRated: [...state.topRated],
          popular: [...state.popular],
          nowPlaying: [...state.nowPlaying]
        };

    case "load":
      return { 
        movies: action.payload.movies, 
        upcoming: [...state.upcoming], 
        topRated: [...state.topRated], 
        popular: [...state.popular], 
        nowPlaying: [...state.nowPlaying] };

    case "load-upcoming":
      return { 
        upcoming: action.payload.movies, 
        movies: [...state.movies], 
        topRated: [...state.topRated], 
        popular: [...state.popular], 
        nowPlaying: [...state.nowPlaying] };

    case "load-top-rated":
      return { 
        topRated: action.payload.movies, 
        movies: [...state.movies], 
        upcoming: [...state.upcoming], 
        popular: [...state.popular], 
        nowPlaying: [...state.nowPlaying] };

    case "load-popular":
      return { 
        popular: action.payload.movies, 
        movies: [...state.movies], 
        upcoming: [...state.upcoming], 
        topRated: [...state.topRated], 
        nowPlaying: [...state.nowPlaying] };

    case "load-now-playing":
      return { 
        nowPlaying: action.payload.movies, 
        movies: [...state.movies], 
        upcoming: [...state.upcoming], 
        popular: [...state.popular], 
        topRated: [...state.topRated]};

    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated],
        popular: [...state.popular], 
        nowPlaying: [...state.nowPlaying]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], topRated: [], popular: [], nowPlaying: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
  }, []);

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      dispatch({ type: "load-top-rated", payload: { movies } });
    });
  }, []);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
  }, []);

  useEffect(() => {
    getNowPlayingMovies().then((movies) => {
      dispatch({ type: "load-now-playing", payload: { movies } });
    });
  }, []);


  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        topRated: state.topRated,
        popular: state.popular,
        nowPlaying: state.nowPlaying,
        addToFavorites: addToFavorites,
        addToWatchList: addToWatchList,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;