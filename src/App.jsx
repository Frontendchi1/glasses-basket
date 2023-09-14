import React from "react";
import Navbar from "./components/navbar";

import Products from "./components/Products";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal } from "./redux/features/basketSlice";

function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);

  // Calculate the total price
  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  return (
    <div className="max-w-screen-lg mx-auto px-5">
      <Navbar />
      <h1 className="text-center mt-5 py-3 text-5xl text-white">Redux Store</h1>
      <Products />
    </div>
  );
}

export default App;
