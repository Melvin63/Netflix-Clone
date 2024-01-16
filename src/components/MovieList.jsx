import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return <p>No movies available</p>;
  }

  return (
    <div className="px-6 ">
      <h1 className=" text-white text-2xl md:text-3xl py-2">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className=" flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
