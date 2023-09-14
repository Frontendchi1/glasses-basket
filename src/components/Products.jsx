import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Products() {
  const { products, total, amount } = useSelector((store) => store.basket);

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        {products.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            amount={item.amount}
          />      


          
        ))}
      </div>
      <div>
        {products.length > 0 ? (
          <>
            <p className="text-[20px] mt-5 text-center">Total: ${total.toFixed(2)}</p>
          </>
        ) : (
          <>
            <p className="text-2xl text-gray-700 font-medium text-center">Your basket is empty</p>
          </>
        )}
      </div>
    </>
  );
}

export default Products;
