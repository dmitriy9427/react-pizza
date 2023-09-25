import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: "rating",
  currentPage: 1,
  search: "",
  typeActivate: 0,
  selectedSize: 0,
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
    setSearchPizzas(state, action) {
      state.search = action.payload;
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
    setSelectedTypeActivate(state, action) {
      state.typeActivate = action.payload;
    },
    setSelectedSize(state, action) {
      state.typeActivate = action.payload;
    },
  },
});

export const {
  setSelectedCategory,
  setSelectedSort,
  setSelectedPage,
  setSearchPizzas,
  nextPage,
  prevPage,
  setSelectedTypeActivate,
  setSelectedSize,
} = filterSlice.actions;

export default filterSlice.reducer;
