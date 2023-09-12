import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setSelectedCategory } = filterSlice.actions;

export default filterSlice.reducer;
