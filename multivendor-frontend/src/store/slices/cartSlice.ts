import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}

const initialState: ReadonlyArray<IProduct> = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      if (state.findIndex((item) => item.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
