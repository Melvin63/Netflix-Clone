import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, gptMovies } = useSelector((store) => store.gpt);
  if (!movieNames) {
    return null;
  }

  return (
    <div className="p-4 m-4 bg-opacity-80 bg-black text-white">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList title={movie} movies={gptMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
