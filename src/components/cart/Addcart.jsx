import React, { useContext } from "react";
import { data } from "../shop/data";
import { ShopContext } from "../../context/Shopcontext";
import { useNavigate } from "react-router-dom";
import Banner from "../banner/Banner";

export const Addcart = () => {
  const { addToCart, cartitems, removeFromCart, getTotalAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalAmount();

  const navigate = useNavigate();

  return (
    <>
    <Banner heading={"Your Cart Items"} subheading={"Explore and manage the items in your shopping cart"}/>
      
      <div className="container xl:max-w-7xl w-11/12 md:px-40 xl:px-60 mx-auto py-8">
        <div className="mt-8">
          {data.map((product) => {
            if (cartitems[product.id] !== 0) {
              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between border rounded-lg p-4 mb-4"
                >
                  <div className="flex items-center space-x-4 w-full">
                    <div className="w-full">
                      <img
                        src={product.img}
                        alt=""
                        className="xl:h-36 xl:w-48 w-32 object-contain"
                      />
                    </div>
                    <div className="xl:w-[100rem] w-full flex justify-between  px-10 xl:items-center flex-col xl:flex-row xl:gap-10">
                      <div>
                        <p className="xl:text-lg text-base font-bold">
                          {product.title}
                        </p>
                        <p className="font-semibold text-sm xl:text-base text-gray-400 tracking-widest uppercase">
                          {product.company}
                        </p>
                        <p className="xl:text-xl text-base font-extrabold">
                          ${product.newPrice}
                        </p>
                      </div>
                      <div className=" items-center space-x-1 flex">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          id="decrement"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          -
                        </button>
                        <input
                          id="counter"
                          type="text"
                          className="border rounded w-16 py-2 text-center"
                          value={cartitems[product.id]}
                        />
                        <button
                          onClick={() => addToCart(product.id)}
                          id="increment"
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="flex justify-center items-center -mt-10">
        {totalAmount > 0 ? (
          <div className="mt-8 flex  flex-col items-center justify-center xl:gap-4 gap-0">
            <p className="font-extrabold xl:text-3xl text-xl text-black mb-3 ">
              Total: ${totalAmount}
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-violet-500 text-white font-bold py-2 px-4 rounded mb-10"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="-mt-14  flex  flex-col items-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
              alt=""
            />
            <button
              onClick={() => navigate("/")}
              className="bg-violet-500 text-white font-bold py-2 px-4 rounded"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
