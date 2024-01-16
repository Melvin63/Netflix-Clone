import React from "react";
import { MOVIE_lIST } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return;
  }
  return (
    <div className=" w-32 md:w-48 pr-2">
      <img src={MOVIE_lIST + posterPath} alt="movie card list" />
    </div>
  );
};

export default MovieCard;
