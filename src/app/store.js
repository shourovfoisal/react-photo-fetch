import { configureStore } from "@reduxjs/toolkit";
import navItemsReducer from "./slices/navItems";
import imagesReducer from "./slices/handleImages";

export default configureStore({
  reducer: {
    navItems: navItemsReducer,
    images: imagesReducer,
  },
});
