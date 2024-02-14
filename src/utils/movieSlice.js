import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingmovies: null,
    trailerVideos: null,
  },
  reducers: {
    addNowPlayingmovies: (state, action) => {
      state.nowPlayingmovies = action.payload;
    },
    addTrailerVideos: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});

export const { addNowPlayingmovies, addTrailerVideos } = movieSlice.actions;

export default movieSlice.reducer;
