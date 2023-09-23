import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the product ID
import { BsHandbagFill } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { ShopContext } from "../../context/Shopcontext";
import { data } from "./data";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL

  const { addToCart, cartitems, addToWishList, wishList, removeFromWishList } =
    useContext(ShopContext);

  const [isFav, setIsFav] = useState(wishList[id]); // wishlist ---------------

  const [product, setProduct] = useState(null); // State to hold the product data

  // Function to fetch and set the product data based on the product ID
  const fetchProductDetails = () => {
    const selectedProduct = data.find((item) => item.id === Number(id)); // Assuming 'data' is your array of products
    setProduct(selectedProduct);
    // console.log(selectedProduct)
  };

  // console.log("product", product);

  // Use useEffect to fetch product details when the component mounts
  useEffect(() => {
    fetchProductDetails();
  }, [id]); // Run the effect whenever the product ID changes

  // Check if product is loaded before rendering
  if (!product) {
    return <div>Loading...</div>;
  }

  //---------- add to cart logic------------
  const handleMoveToCart = (id) => {
    addToCart(id);
    removeFromWishList(id);
  };

  // ----------- add to wishlist logic------------

  const handleToggleFav = () => {
    setIsFav(!isFav);
    if (!isFav) {
      addToWishList(id);
    } else {
      removeFromWishList(id);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mx-auto mt-28 lg:w-[80vw] md:w-[90vw] ">
        <div style={{boxShadow: "0 0 0 2px blue, 8px 8px 0 0 blue"}} className="flex flex-col md:flex md:flex-row justify-evenly max-w-7xl mx-auto  mb-5  px-5 md:px-0 md:p-10 w-full md:border  md:shadow-gray-500 md:shadow-2xl md:rounded-3xl ">
          <div className=" flex items-center w-full justify-center">
            <img
              src={product.img}
              className=" h-[100px]  md:h-[150px] xl:h-[200px] object-cover "
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-8 w-full">
            <div className="flex flex-col gap-2  ">
              <p className=" text-2xl md:text-3xl font-bold flex items-start mt-6">
                {product.company}
              </p>
              <p className="text-start font-semibold">{product.title}</p>
              <p className="text-start font-semibold">{product.reviews}</p>
              <p className="text-2xl">{product.star}</p>
            </div>
            <div className="text-start  ">
              <p className="font-extrabold  text-2xl md:text-3xl p-2 text-indigo-500">
                ${product.newPrice}{" "}
              </p>
              <p className="text-md  text-green-500">inclusive of all taxes</p>
              <p className="text-base md:text-xl font-bold p-2 ">
                SELECT SIZE (UK Size)
              </p>
              <div className="flex gap-3 mb-8">
                <p className="border border-gray-500 rounded-full  w-10 h-10 flex items-center justify-center hover:border-red-500">
                  7
                </p>
                <p className="border border-gray-500 rounded-full  w-10 h-10 flex items-center justify-center hover:border-red-500">
                  8
                </p>
                <p className="border border-gray-500 rounded-full  w-10 h-10 flex items-center justify-center hover:border-red-500">
                  9
                </p>
                <p className="border border-gray-500 rounded-full  w-10 h-10 flex items-center justify-center hover:border-red-500">
                  10
                </p>
                <p className="border border-gray-500 rounded-full  w-10 h-10 flex items-center justify-center hover:border-red-500">
                  11
                </p>
              </div>
              <div className="flex gap-3  ">
                <button
                  onClick={() => handleMoveToCart(product.id)}
                  className="bg-indigo-700 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md  flex items-center gap-4"
                >
                  <BsHandbagFill size={20} /> ADD TO BAG
                </button>
                {/* <button
                  onClick={handleToggleFav}
                  className="bg-transparent border-2 border-gray-400 text-black  hover:border-black font-semibold py-2 px-6  rounded-md  flex items-center gap-4"
                >
                  <AiOutlineHeart size={20} />
                  WISHLIST
                </button> */}
                {isFav ? (
                <button
                  onClick={handleToggleFav}
                  className="bg-transparent border-2 border-gray-400 text-black  hover:border-black font-semibold py-2 px-6  rounded-md  flex items-center gap-4"
                >
                  <AiFillHeart size={28} className="text-red-500" />
                  WISHLIST
                </button>
              ) : (
                <button
                  onClick={handleToggleFav}
                  className="bg-transparent border-2 border-gray-400 text-black  hover:border-black font-semibold py-2 px-6  rounded-md  flex items-center gap-4"
                >
                  <AiOutlineHeart size={28} />
                  WISHLIST
                </button>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
