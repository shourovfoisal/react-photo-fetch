import { configureStore } from "@reduxjs/toolkit";
import navItemsReducer from "./slices/navItems";
import imagesReducer from "./slices/handleImages";
import expandImageReducer from "./slices/expandImage";

export default configureStore({
  reducer: {
    navItems: navItemsReducer,
    images: imagesReducer,
    expandImage: expandImageReducer,
  },
});
