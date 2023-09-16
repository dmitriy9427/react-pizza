import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  counter: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action) {
      const total = state.items.reduce(
        (sum, obj) => sum + obj.price * obj.count,
        0
      );
      state.totalPrice = total;
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.types === action.payload.types &&
          item.sizes === action.payload.sizes
      );

      const findIdItem = state.items.find(
        (obj) => obj.id === action.payload.id
      );

      if (findIdItem) {
        findIdItem.countertBtn++;
      }

      if (!findItem) {
        state.items.push(action.payload);
        state.counter++;
      } else {
        ++findItem.count;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.date !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price, 0);
      state.counter--;
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.counter = 0;
    },
    incrementCount(state, action) {
      const findItem = state.items.find((item) => item.date === action.payload);

      if (findItem) {
        findItem.count++;
        state.totalPrice = state.items.reduce(
          (sum, obj) => sum + obj.price * obj.count,
          0
        );
      }
    },
    decrementCount(state, action) {
      const findItem = state.items.find((item) => item.date === action.payload);

      if (findItem && findItem.count >= 2) {
        findItem.count--;
        // state.totalPrice -= findItem.price;
        state.totalPrice = state.items.reduce(
          (sum, obj) => sum + obj.price * obj.count,
          0
        );
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
