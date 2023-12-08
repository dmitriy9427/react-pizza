import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartItem = {
  items: {
    id: string;
    imageUrl: string;
    title: string;
    types: string[];
    sizes: number[];
    price: number;
    count: number;
    countertBtn: number;
    date: number;
  }[]
}

export type Obj = {
  id: string;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  count: number;
  countertBtn: number;
  date: number;
}

const initialState: CartItem = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPizza(state, action: PayloadAction<Obj>) {
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
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.date !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
    incrementCount(state, action: PayloadAction<number>) {
      const findItem = state.items.find((item) => item.date === action.payload);

      if (findItem) {
        findItem.countertBtn++;
        findItem.count++;
      }
    },
    decrementCount(state, action: PayloadAction<number>) {
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
