import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptBtnSlice";
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movie: movieReducer,
    gptBtn: gptReducer,
  },
});
export default appStore;
