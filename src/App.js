import { useEffect, useState } from "react";
import "./App.css";

import MovieList from "./components/MovieList";
import movieData from "./components/movies.json";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filteredMovies, setFilteredMovies] = useState(movieData);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };
  const handleFilter = () => {
    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title
        .toLowerCase()
        .includes(title.toLowerCase());
      const ratingMatch = rating === "" || movie.rating <= parseFloat(rating);
      return titleMatch && ratingMatch;
    });
    setFilteredMovies(filtered);
  };
  const handleFilterChange = () => {
    handleFilter({ title, rating });
  };

  useEffect(() => {
    handleFilter();
  }, [rating, title]);

  return (
    <div className="App">
      <Routes>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/addmovie" element={<AddMovie onAdd={addMovie} />} />
        <Route
          path="/filtre"
          element={
            <Filter
              title={title}
              setTitle={setTitle}
              rating={rating}
              setRating={setRating}
              handleFilterChange={handleFilterChange}
            />
          }
        />
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
      </Routes>
    </div>
  );
}

export default App;
