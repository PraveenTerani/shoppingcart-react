import React, { useContext } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import { Link } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";
// import { data } from "./shop/data";

export const Navbar = () => {
  const { getCartCount, search, setSearch } = useContext(ShopContext);

  const handleInputChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value)
    setSearch(e.target.value);
  };
  // const filteredItems = data.filter((item) =>
  //   item.title.toLowerCase().includes(search.toLowerCase())
  // );

  // console.log(filteredItems)

  return (
    <div className="bg-blue-900 z-10 text-white h-16 sticky top-0 flex items-center justify-between px-5 xl:px-20 gap-2 md:gap-0">
      <Link to="/" className="xl:text-4xl text-xl font-extrabold">
        MyStore
      </Link>
      <div className="flex items-center justify-center border border-gray-500 hover:border-gray-100 rounded-xl gap-2 ">
        <BsSearch size={25} className="ml-4 text-blue-200" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
          className="p-2 outline-none w-24 sm:w-[30vw] md:w-[40vw] bg-transparent text-base"
        />
      </div>
      <div className="flex items-center gap-3 xl:gap-10">
        <Link to="/wishList" className="flex flex-col  items-center">
          <AiOutlineHeart size={30} />
          <span>WishList</span>
        </Link>
        <Link to="/cart" className="relative flex flex-col  items-center">
          <AiOutlineShoppingCart size={32} className="text-white" />
          <span>Cart</span>
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};
