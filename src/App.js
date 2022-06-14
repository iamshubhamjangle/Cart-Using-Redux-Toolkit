import Navbar from "components/Navbar";
import CartContainer from "components/CartContainer";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "components/Modal";

function App() {
  // @ts-ignore
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Modal />
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
