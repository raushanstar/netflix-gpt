import { createSlice } from "@reduxjs/toolkit";

const gptBtnSlice = createSlice({
  name: "gptBtn",
  initialState: {
    clickBtn: false,
  },

  reducers: {
    toggleSearch: (state) => {
      state.clickBtn = !state.clickBtn;
    },
  },
});

export const { toggleSearch } = gptBtnSlice.actions;
export default gptBtnSlice.reducer;
