import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/FilterSlice";

export const store = configureStore({
  reducer: {
    filters: filterSlice,
  },
});
