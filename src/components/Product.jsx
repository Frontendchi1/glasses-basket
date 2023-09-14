import React from "react";
import { increment, decrement, remove } from "../redux/features/basketSlice";
import { useDispatch } from "react-redux";
function Product({ name, amount, price, image }) {
    const dispatch = useDispatch()
  return (
    <div className="border p-4 rounded-lg">
      <img src={image} alt={`${name} glasses`} className="w-full" />
      <h2 className="mt-2 text-xl">{name}</h2>
      <p>Price: ${price}</p>
      <div className="mt-2 flex justify-between items-center">
        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => dispatch(remove({name}))}>
          Delete
        </button>
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => dispatch(decrement({name}))}>
            -
          </button>
          <p className="mx-2">{amount}</p>
          <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={() => dispatch(increment({name}))}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
