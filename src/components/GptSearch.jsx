import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Netflix_Movies_Logo } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10  ">
        <img
          className="  h-screen object-cover md:h-full"
          src={Netflix_Movies_Logo}
          alt="bg image of movies"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
