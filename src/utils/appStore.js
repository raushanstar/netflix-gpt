import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptBtnSlice";
import movieDetailsReducer from "./movieDetailsSlice";
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movie: movieReducer,
    gptBtn: gptReducer,
    movieDT:movieDetailsReducer
  },
});
export default appStore;
