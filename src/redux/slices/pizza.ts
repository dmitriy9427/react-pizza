import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type PizzaItem = {
  id: string;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  count: number;
  countertBtn: number;
  structure: string;
}
export enum Status {
  LOADING = "Загрузка",
  SUCSESS = "Загружено",
  ERROR = "Ошибка",
}

interface Pizza {
  pizzas: PizzaItem[];
  status: Status;
}

type Info = {
  sort: string;
  categoryId: number;
  search: string;
  currentPage: number;
}

const initialState: Pizza = {
  pizzas: [],
  status: Status.LOADING,
};

export const fetchPizzas = createAsyncThunk<PizzaItem[], Info>(
  "pizzaSlice/fetchPizzas",
  async (params) => {

    const { sort, categoryId, search, currentPage } = params;
    const sortby = `&sortBy=${sort}&order=asc`;
    const category =
      categoryId > 0 ? `&category=${categoryId}&order=asc` : "";
    const searching = search ? `&search=${search}` : "";
    const pages = `page=${currentPage}&limit=4`;
    const { data } = await axios.get(
      `https://64e1008250713530432ce0c5.mockapi.io/pizzas/?${pages}${searching}${category}${sortby}`
    );

    return data;

  }
);

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.pizzas = [];
      state.status = Status.LOADING;
    })

    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<PizzaItem[]>) => {
      state.status = Status.SUCSESS;
      state.pizzas = action.payload;
    })

    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.pizzas = [];
    })
  }
}
);

export default pizzaSlice.reducer;
