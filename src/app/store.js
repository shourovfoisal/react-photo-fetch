import { configureStore } from "@reduxjs/toolkit";
import navItems from "./slices/navItems";
import images from "./slices/handleImages";
import expandImage from "./slices/expandImage";
import darkMode from "./slices/darkMode";
import screenDim from "./slices/ScrenDim";

export default configureStore({
  reducer: {
    navItems,
    images,
    expandImage,
    darkMode,
    screenDim,
  },
});
