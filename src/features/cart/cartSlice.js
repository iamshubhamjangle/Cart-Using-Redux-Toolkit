import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 9,
  total: 0,
  isLoading: true,
};

// We can mutate the state directly because
// redux toolkit comes with Immer Library
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      //we can mutate the state bze of Immer
      state.cartItems = [];

      //If we want to clear the whole state we can return a new empty state
      // Note*: this would clear the whole state and keep cartItems empty
      // return { cartItems: [] };
      // return initialState;
    },
    removeItem: (state, action) => {
      // action = { payload: "rec1JZlfCIBOPdcT2" type: "cart/removeItem" }
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      // action = { payload: 'rec1JZlfCIBOPdcT2', type: 'cart/increase' }
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      // action = { payload: {id: 'rec1JZlfCIBOPdcT2'} type: "cart/decrease" }
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * +item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
