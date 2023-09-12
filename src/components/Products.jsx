import { useSelector } from "react-redux";

function Product({ name, amount, price, image, onDelete }) {
  return (
    <div className="flex justify-between mb-5 group">
      <div className="flex gap-14">
        {/* Apply transition and group-hover styles */}
        <img
          src={image}
          alt={name + " glasses"}
          className="w-40 transform transition-transform group-hover:scale-110"
        />

        <div className="flex flex-col gap-1">
          <p className="font-medium">{name}</p>
          <p className="font-medium">${price}</p>
          <button className="text-red-500 tracking-wider" onClick={onDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm-8 5v6h2v-6H9zm4 0v6h2v-6h-2zM9 4v2h6V4H9z" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button>-</button>
        <p>{amount}</p>
        <button>+</button>
      </div>
    </div>
  );
}

export default Product;
