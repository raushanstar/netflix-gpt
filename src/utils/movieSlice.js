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
    addTrandingVideos: (state, action) => {
      state.trandigVideos = action.payload;
    },
  },
});

export const { addNowPlayingmovies, addTrailerVideos, addTrandingVideos } =
  movieSlice.actions;

export default movieSlice.reducer;
