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
    removeImages: (state, action) => {
      const newArray = state.fetchedImages.filter(
        (image) => image.key !== action.payload.key
      );
      state.fetchedImages = newArray;
    },
  },
});

export const { addImages, removeImages } = imageSlice.actions;
export default imageSlice.reducer;
