import { createSlice } from "@reduxjs/toolkit";

export const screenDim = createSlice({
  name: "screenDim",
  initialState: {
    amount: 0,
  },
  reducers: {
    adjustDim: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { adjustDim } = screenDim.actions;
export default screenDim.reducer;
