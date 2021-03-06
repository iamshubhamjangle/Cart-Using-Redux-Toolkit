import Navbar from "components/Navbar";
import CartContainer from "components/CartContainer";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "components/Modal";

function App() {
  // @ts-ignore
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  // @ts-ignore
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
      <footer className="footer">
        <p>Made by Shubham Jangle</p>
        <p>This project was made to test how Redux Toolkit works!</p>
      </footer>
    </main>
  );
}
export default App;
