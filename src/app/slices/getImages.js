import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "images",
  initialState: {
    fetchedImages: [],
  },
  reducers: {
    addImages: (state, action) => {
      state.fetchedImages = [
        ...state.fetchedImages,
        { key: action.payload.key, images: action.payload.images },
      ];
    },
  },
});

export const { addImages } = imageSlice.actions;
export default imageSlice.reducer;
