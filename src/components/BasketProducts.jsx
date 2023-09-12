import React from "react";
import { useSelector } from "react-redux";
import Product from "./Products";

function BasketProducts() {
  const { products } = useSelector((store) => store.basket);

  // Calculate the total amount and price
  const totalAmount = products.reduce((acc, item) => acc + item.amount, 0);
  const totalPrice = products.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <div>
      {products.map((item) => {
        const { name, price, image, amount } = item;
        return (
          <Product
            key={new Date().getTime() + Math.random()}
            name={name}
            price={price}
            image={image}
            amount={amount}
          />
        );
      })}

      {/* Display total amount and price as a flex container */}
      <div className="flex justify-around mt-4">
        <p className="font-medium">Total: {totalAmount}</p>
        <p className="font-medium">Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default BasketProducts;
