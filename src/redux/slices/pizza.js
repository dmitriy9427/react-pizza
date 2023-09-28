import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pizzas: [],
  status: "loading",
};

export const fetchPizzas = createAsyncThunk(
  "pizzaSlice/fetchPizzas",
  async function ({ sort, categoryId, search, currentPage }, thunkAPI) {
    try {
      const sortby = `&sortBy=${sort}&order=asc`;
      const category =
        categoryId > 0 ? `&category=${categoryId}&order=asc` : "";
      const searching = search ? `&search=${search}` : "";
      const pages = `page=${currentPage}&limit=4`;
      const res = await axios.get(
        `https://64e1008250713530432ce0c5.mockapi.io/pizzas/?${pages}${searching}${category}${sortby}`
      );

      return res.data;
    } catch (error) {
      console.log(error.message);
      throw new Error(thunkAPI.rejectWithValue);
    }
  }
);

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
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
      state.status = "error";
      state.pizzas = [];
    },
  },
});

// export const { getPizzas } = pizzaSlice.actions;

export default pizzaSlice.reducer;
