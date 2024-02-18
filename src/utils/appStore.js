import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptBtnSlice";
import suggestionReducer from "./aiMovieSlice"
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movie: movieReducer,
    gptBtn: gptReducer,
    suggestionMovie:suggestionReducer
  },
});
export default appStore;
