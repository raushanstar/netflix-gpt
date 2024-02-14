import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import movieReducer from "./movieSlice";
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movie: movieReducer,
  },
});
export default appStore;
