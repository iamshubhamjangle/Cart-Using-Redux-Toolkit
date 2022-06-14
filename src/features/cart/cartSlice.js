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
      //console.log(action);  //payload: "rec1JZlfCIBOPdcT2" type: "cart/removeItem"
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id != itemId);
    },
  },
});

console.log(cartSlice);
export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
