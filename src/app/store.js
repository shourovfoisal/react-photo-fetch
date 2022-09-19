import { configureStore } from "@reduxjs/toolkit";
import navItemsReducer from "./slices/navItems";
import imagesReducer from "./slices/getImages";

export default configureStore({
  reducer: {
    navItems: navItemsReducer,
    images: imagesReducer,
  },
});
