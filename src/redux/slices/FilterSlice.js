import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: "rating",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedCategory(state, action) {
      state.categoryId = action.payload;
    },
    setSelectedSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setSelectedCategory, setSelectedSort } = filterSlice.actions;

export default filterSlice.reducer;
