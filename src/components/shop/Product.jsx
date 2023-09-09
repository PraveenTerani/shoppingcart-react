import React, { useContext } from "react";
import { ShopContext } from "../../context/Shopcontext";

export const Product = (props) => {
  const { id, title, img, newPrice, company } = props.data;

  const { addToCart, cartitems } = useContext(ShopContext);

  const cartItemAmount = cartitems[id];

  return (
    <div className="flex items-center col-span-12 min-[400px]:col-span-6 md:col-span-4 cursor-pointer xl:col-span-3 justify-center mb-12 border-2 rounded-xl m-2 bg-white hover:border-indigo-500 transition duration-300 transform hover:scale-105 overflow-hidden">
      <div className="flex flex-col justify-center items-center p-4">
        <img src={img} alt={title} className="h-40 w-48 object-contain mb-4 rounded-lg" />
        <p className="font-bold text-lg xl:text-xl text-gray-900">{title}</p>
        <p className="font-mono text-xs uppercase text-gray-600 xl:text-sm">{company}</p>
        <p className="font-extrabold text-indigo-500 text-lg xl:text-base">${newPrice}</p>
        <button
          onClick={() => addToCart(id)}
          className="bg-indigo-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none"
        >
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
