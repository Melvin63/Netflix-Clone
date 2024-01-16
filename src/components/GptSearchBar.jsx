import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_options } from "../utils/constants";
import { pushGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_options,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the qurey :" +
      searchText.current.value +
      ". only give me names of  five movies present in movie databases and comma separated like the example ahead . Example : matrix, titanic , hero , seven, joker";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults) {
      <h1>no result found</h1>;
    }
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovie(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(pushGptMovies({ movieNames: gptMovies, gptMovies: tmdbResults }));
  };
  return (
    <div className=" pt-[40%]  md:pt-[10%] flex justify-center">
      <form
        action=""
        className="bg-black  w-full md:w-1/2  grid grid-cols-12 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="p-4 m-2 col-span-9 "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="py-2 px-4  m-3 col-span-3 rounded-md bg-red-700 text-white "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
