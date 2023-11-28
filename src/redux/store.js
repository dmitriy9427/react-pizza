import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filter";
import cartSlice from "./slices/cart";
import pizzaSlice from "./slices/pizza";

export const store = configureStore({
  reducer: {
    filters: filterSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch