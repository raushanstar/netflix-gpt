import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDT",
  initialState: {
    clickBtn: false,
  },

  reducers: {
    toggleBTN: (state) => {
      state.clickBtn = !state.clickBtn;
    },
  },
});

export const { toggleBTN } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
