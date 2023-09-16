import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filter";
import cartSlice from "./slices/cart";

export const store = configureStore({
  reducer: {
    filters: filterSlice,
    cart: cartSlice,
  },
});
