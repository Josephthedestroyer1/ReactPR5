import React, { useState } from "react";
import Filter from "./Filter";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const movieList = [
  {
    title: "Blade Runner",
    info: "(1982) Sci-Fi, Thriller",
    description:
      "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    rating: 7,
    img: "http://digitalspyuk.cdnds.net/15/47/1600x800/landscape-1447754794-harrison-ford-blade-runner.jpg",
  },
  // ... other movie objects
];

function App() {
  // State variables to manage movie list and input values
  const [movies, setMovies] = useState(movieList);
  const [inputTitle, setInputTitle] = useState("");
  const [inputInfo, setInputInfo] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputRating, setInputRating] = useState("");
  const [inputImage, setInputImage] = useState("");

  const addMovie = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Create a new movie object using input values
    const newMovie = {
      title: inputTitle,
      info: inputInfo,
      description: inputDescription,
      rating: parseInt(inputRating),
      img: inputImage,
    };

    // Update the movies state by appending the new movie
    setMovies([...movies, newMovie]);

    // Reset input values to empty after adding a movie
    setInputTitle("");
    setInputDescription("");
    setInputImage("");
    setInputInfo("");
    setInputRating("");
  };

  return (
    <div>
      <header>
        <nav>
          <h1 className="title1">Movies</h1>
        </nav>
      </header>

      <form className="inputss" onSubmit={addMovie}>
        {/* Input fields for movie details */}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />

        <label htmlFor="info">Info</label>
        <input
          type="text"
          id="info"
          value={inputInfo}
          onChange={(e) => setInputInfo(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        />

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          value={inputRating}
          onChange={(e) => setInputRating(e.target.value)}
        />

        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          value={inputImage}
          onChange={(e) => setInputImage(e.target.value)}
        />

        <button type="submit">Add Movie</button>
      </form>

      {/* Render the movie list component */}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
