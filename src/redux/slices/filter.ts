import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Filter = {
  categoryId: number;
  sort: "rating" | "price" | "title";
  currentPage: number;
  search: string;
}

type Sort = "rating" | "price" | "title";

const initialState: Filter = {
  categoryId: 0,
  sort: "rating" as Sort,
  currentPage: 1,
  search: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedCategory(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSelectedSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setSearchPizzas(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSelectedPage(state, action: PayloadAction<number>) {
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
  setSearchPizzas,
  nextPage,
  prevPage,
} = filterSlice.actions;

export default filterSlice.reducer;
