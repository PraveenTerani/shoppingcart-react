import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/Shopcontext";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, title, img, newPrice, company } = props.data;

  const {
   
    cartitems,
    addToWishList,
    wishList,
    removeFromWishList,
    selectProduct,
  } = useContext(ShopContext);

  const cartItemAmount = cartitems[id];

  const [isFavorited, setIsFavorited] = useState(wishList[id]); // wishlist ---------------

  const handleToggleFavourite = () => {
    setIsFavorited(!isFavorited);
    if (!isFavorited) {
      addToWishList(id);
    } else {
      removeFromWishList(id);
    }
  };

  //----------Product Details--------------

  // const [productDetalis, setProductDetalis] = useState();

  const handleProductDetails = () => {
    console.log(id);
    selectProduct(id); // Set the selected product ID in the context
  };

  return (
    <>
      <div className="flex items-center col-span-12 min-[400px]:col-span-6 md:col-span-4 cursor-pointer xl:col-span-3 justify-center mb-12 border-2 rounded-xl m-2 bg-white hover:border-indigo-500 transition duration-300 transform hover:scale-105 overflow-hidden">
        
          
          {/* Use a dynamic URL */}
          <div
            onClick={handleProductDetails}
            className="flex flex-col justify-center items-center p-4"
          >
            <Link to={`/productDetails/${id}`}>
            <img
              src={img}
              alt={title}
              className="h-40 w-48 object-contain mb-4 rounded-lg"
            />
              </Link>
            <p className="font-bold text-lg xl:text-xl text-gray-900">
              {title}
            </p>
            <p className="font-mono text-xs uppercase text-gray-600 xl:text-sm">
              {company}
            </p>
            <p className="font-extrabold text-indigo-500 text-lg xl:text-xl">
              ${newPrice}
            </p>
           
            <div className="flex items-center justify-center mt-4 w-full">
              {isFavorited ? (
                <button
                  onClick={handleToggleFavourite}
                  className="bg-transparent border-2 border-gray-400 text-black  hover:border-black font-semibold py-2 px-6  rounded-md  flex items-center gap-4"
                >
                  <AiFillHeart size={28} className="text-red-500" />
                  WISHLIST
                </button>
              ) : (
                <button
                  onClick={handleToggleFavourite}
                  className="bg-transparent border-2 border-gray-400 text-black  hover:border-black font-semibold py-2 px-6  rounded-md  flex items-center gap-4"
                >
                  <AiOutlineHeart size={28} />
                  WISHLIST
                </button>
              )}
            </div>
          </div>
       
      </div>
      
    </>
  );
};
