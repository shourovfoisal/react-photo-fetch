import { createSlice } from "@reduxjs/toolkit";

export const navItemSlice = createSlice({
  name: "navItems",
  initialState: {
    selectedItemsList: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemsList = state.selectedItemsList;
      const itemToAdd = action.payload;
      if (!itemsList.includes(itemToAdd))
        state.selectedItemsList.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemsList = state.selectedItemsList;
      const itemToRemove = action.payload;
      const itemIndex = itemsList.indexOf(itemToRemove);
      if (itemIndex !== -1) state.selectedItemsList.splice(itemIndex, 1);
    },
  },
});

export const { addItem, removeItem } = navItemSlice.actions;
export default navItemSlice.reducer;
