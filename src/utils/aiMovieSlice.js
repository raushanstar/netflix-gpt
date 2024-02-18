import { createSlice } from "@reduxjs/toolkit";

const aiMovie = createSlice({
  name: "suggestionMovie",
  initialState: {
    gptMovie: null,
  },
  reducers: {
    movieSuggestionList: (state, action) => {
      state.gptMovie = action.payload;
    }
}
});

export const { movieSuggestionList} =
aiMovie.actions;

export default aiMovie.reducer;
