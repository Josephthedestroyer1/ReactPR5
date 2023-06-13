import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import "./style.css";

const MovieList = ({ movies }) => {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const handleTitleChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleRatingChange = (event) => {
    setFilterRating(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const ratingMatch =
      filterRating === "" || movie.rating == parseInt(filterRating);
    return titleMatch && ratingMatch;
  });

  return (
    <div className="Moviefilter">
      <h2>Filter through movies</h2>
      <Filter
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />

      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie, index) => (
          <MovieCard key={index} item={movie} />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
