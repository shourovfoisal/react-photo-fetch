import { createSlice } from "@reduxjs/toolkit";

export const expandImageSlice = createSlice({
  name: "expandImage",
  initialState: {
    imageLink: null,
    imageAlt: null,
  },
  reducers: {
    setExpandImage: (state, action) => {
      state.imageLink = action.payload.imageLink;
      state.imageAlt = action.payload.imageAlt;
    },
    removeExpandImage: (state) => {
      state.imageLink = null;
      state.imageAlt = null;
    },
  },
});

export const { setExpandImage, removeExpandImage } = expandImageSlice.actions;
export default expandImageSlice.reducer;
