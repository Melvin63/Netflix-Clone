import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black w-screen ">
      <div className="mt-0  md:-mt-52 relative z-10 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />

        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondContainer;
