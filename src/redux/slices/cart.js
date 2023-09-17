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

      if (!findItem) {
        state.items.push(action.payload);
      } else {
        findItem.countertBtn++;
        findItem.count++;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.date !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price, 0);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    incrementCount(state, action) {
      const findItem = state.items.find((item) => item.date === action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price, 0);

      if (findItem) {
        findItem.countertBtn++;
        findItem.count++;
      }
    },
    decrementCount(state, action) {
      const findItem = state.items.find((item) => item.date === action.payload);
      state.totalPrice = state.items.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
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
