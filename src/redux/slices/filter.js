import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: "rating",
  currentPage: 1,
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
    setSelectedPage(state, action) {
      state.currentPage = action.payload;
    },
    nextPage(state) {
      state.currentPage = state.currentPage + 1;
    },
    prevPage(state) {
      state.currentPage = state.currentPage - 1;
    },
  },
});

export const {
  setSelectedCategory,
  setSelectedSort,
  setSelectedPage,
  nextPage,
  prevPage,
} = filterSlice.actions;

export default filterSlice.reducer;
