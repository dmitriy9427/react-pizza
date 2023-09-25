import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
  status: "loading",
};

export const fetchPizzas = createAsyncThunk(
  "pizzaSlice/fetchPizzas",
  async function ({ sort, categoryId, search, currentPage }) {
    const sortby = `&sortBy=${sort}&order=asc`;
    const category = categoryId > 0 ? `&category=${categoryId}&order=asc` : "";
    const searching = search ? `&search=${search}` : "";
    const pages = `page=${currentPage}&limit=5`;
    const res = await fetch(
      `https://64e1008250713530432ce0c5.mockapi.io/pizzas/?${pages}${searching}${category}${sortby}`
    );
    const data = res.json();

    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
    getPizzas(state, action) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.pizzas = [];
      state.status = "loading";
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = "sucsess";
      state.pizzas = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "reject";
      state.pizzas = [];
    },
  },
});

export const { getPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
