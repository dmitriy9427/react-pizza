import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.types === action.payload.types &&
          item.sizes === action.payload.sizes
      );

      const findIdItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findIdItem) {
        findIdItem.countertBtn++;
      }

      if (!findItem) {
        state.items.push(action.payload);
      } else {
        findItem.count++;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.date !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
    incrementCount(state, action) {
      const findItem = state.items.find((item) => item.date === action.payload);

      if (findItem) {
        findItem.countertBtn++;
        findItem.count++;
      }
    },
    decrementCount(state, action) {
      const findItem = state.items.find((item) => item.date === action.payload);

      if (findItem && findItem.count >= 2) {
        findItem.countertBtn--;
        findItem.count--;
      }
    },
  },
});

export const {
  addPizza,
  incrementCount,
  decrementCount,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
