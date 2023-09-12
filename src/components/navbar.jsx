import { useSelector } from "react-redux";

function Navbar() {
  const { amount } = useSelector((state) => state.basket);

  return (
    <div className="flex justify-between pt-5">
      <p className="font-medium text-xl hover:text-red-500 cursor-pointer transition-colors">
        Home
      </p>
      <div className="font-medium flex items-center">
        <p className="text-xl hover:text-red-500 cursor-pointer transition-colors">
          Basket
        </p>
        <span className="bg-red-500 text-sm text-white py-2 px-1 rounded-full w-6 h-6 ml-1 flex items-center justify-center">
          {amount}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
