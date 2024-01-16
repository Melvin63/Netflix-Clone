import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { showGptSearch: false, movieNames: null, gptMovies: null },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    pushGptMovies: (state, action) => {
      const { movieNames, gptMovies } = action.payload;
      state.movieNames = movieNames;
      state.gptMovies = gptMovies;
    },
    removeMovies: (state, action) => {
      state.movieNames = null;
      state.gptMovies = null;
    },
  },
});

export const { toggleGptSearchView, pushGptMovies, removeMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
