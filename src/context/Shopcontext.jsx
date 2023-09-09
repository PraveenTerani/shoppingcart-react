import React, { createContext, useState } from "react";
import { data } from "../components/shop/data";
import toast from "react-hot-toast";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopcontextProvider = (props) => {
  const [cartitems, setCartitems] = useState(getDefaultCart());

  const getTotalAmount = () => {
    let total = 0;
    let carttotal=0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let itemInfo = data.find((pro) => pro.id === Number(item));
        // console.log("===========" , cartitems[item])
       carttotal=cartitems[item] + carttotal
        total += cartitems[item] * itemInfo.newPrice;
      }
    }
    return total ;
  };

  const getCartCount = () => {
    let carttotal=0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let itemInfo = data.find((pro) => pro.id === Number(item));
       carttotal=cartitems[item] + carttotal
      }
    }
    return carttotal ;
  };

  

  const addToCart = (itemId) => {
    toast.success("Item added to cart!");
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //   console.log(cartitems);
  const contextValue = { cartitems, addToCart, removeToCart, getTotalAmount , getCartCount };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
