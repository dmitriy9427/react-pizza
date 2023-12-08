import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filter.ts";
import cartSlice from "./slices/cart.ts";
import pizzaSlice from "./slices/pizza.ts";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filters: filterSlice,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
