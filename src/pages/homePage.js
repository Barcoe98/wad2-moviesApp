import React, {useState, useEffect } from "react";
import Header from "../components/headerMovieList";
import MovieList from "../components/movieList";
import FilterControls from "../components/filterControls";
import StubAPI from "../api/stubAPI";
import { getMovies } from "../api/tmdb-api";

const MovieListPage = () => {
  const [titleFilter, setTitleFilter] = useState("");       // NEW
  const [genreFilter, setGenreFilter] = useState("0");      // NEW

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  
 // NEW BLOCK START
 const genre = Number(genreFilter)
 let displayedMovies = movies
   .filter(m => {
     return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
   })
   .filter(m => {
     return genre > 0 ? m.genre_ids.includes(Number(genreFilter)) : true;
   });

 const handleFilterChange = (type, value) => {
   if (type === "name") setTitleFilter(value);
   else setGenreFilter(value);
 };
 // NEW BLOCK END

 const addToFavorites = movieId => {
  // Find index position of selected movie in the list
  const index = movies.map(m => m.id).indexOf(movieId)

  StubAPI.add(movies[index])
  const updatedList = [...movies]  // Make a copy of the movie list
  updatedList.splice(index, 1)     // Remove selected movie from home page list
  setMovies(updatedList)  
}

 return (
   <>
     <Header numMovies={displayedMovies.length} />          {/* CHANGED */}
     <FilterControls onUserInput={handleFilterChange} />    {/* CHANGED */}
     <MovieList
        movies={displayedMovies}
        buttonHandler={addToFavorites}
      />     {/* CHANGED */}       {/* CHANGED */}
   </>
 );
};

export default MovieListPage;

