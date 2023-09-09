import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { ShopContext } from "../context/Shopcontext";

export const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);

  return (
    <div className="bg-blue-900 z-10 text-white h-16 sticky top-0 flex items-center justify-between px-5 xl:px-20">
      <Link to="/" className="xl:text-2xl text-xl font-extrabold">MyStore</Link>
      <div className="flex items-center gap-3 xl:gap-6">
        <Link to="/" className="text-lg text-white">Shop</Link>
        <Link to="/cart" className="relative">
          <AiOutlineShoppingCart size={32} className="text-white" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {getCartCount()}
          </span>
        </Link>
      </div>
    </div>
  );
};
