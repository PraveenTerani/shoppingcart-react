import React, { useContext } from "react";
import { data } from "../shop/data";
import { ShopContext } from "../../context/Shopcontext";
import Banner from "../banner/Banner";
// import { useNavigate } from "react-router-dom";

const WishList = () => {
  const { wishList, addToCart, removeFromWishList } = useContext(ShopContext);

  const handleMoveToCart = (id) => {
    addToCart(id);
    removeFromWishList(id);
  };

  // const navigate = useNavigate();

  return (
    <>
      <Banner
        heading={"Your Wishist"}
        subheading={
          "Discover and curate your desired items for future purchases"
        }
      />
      <div className="flex   items-center justify-center">
        <div className="  flex  flex-col items-center justify-between gap-10 ">
          {data.map((product) => {
            if (wishList[product.id] === true) {
              return (
                <>
                  <div key={product.id} className="flex  items-center w-full border border-lime-700  rounded-lg p-4 mb-4 ">
                    <div className="w- flex items-center">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="h-32 w-48 object-contain"
                      />
                    </div>

                    <div className=" w-full flex-col md:flex-row gap-5 justify-center items-center flex">
                      <div className="w-full flex justify-center items-center flex-col gap-1">
                        <p>{product.title}</p>
                        <p>{product.company}</p>
                        <p>${product.newPrice}</p>
                      </div>
                      <button
                        onClick={() => handleMoveToCart(product.id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white md:w-60 font-bold py-2 px-4 rounded"
                      >
                        Move to cart
                      </button>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center mt-10">
        <img
          src="https://printmont.com/img/no_wish_list.png"
          alt=""
          className="mb-10"
        />

        <button
          onClick={() => navigate("/")}
          className="bg-violet-500 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div> */}
    
    </>
  );
};

export default WishList;
