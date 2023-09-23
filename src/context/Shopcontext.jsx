import React, { createContext, useState } from "react";
import { data } from "../components/shop/data";
import toast from "react-hot-toast";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < data.length + 1; i++) {
    cart[i] = 0;
  }
  // console.log("cart", cart);
  return cart;
};

const getDefaultWishlist = () => {
  let wish = {};
  for (let i = 1; i <= data.length; i++) {
    wish[i] = false;
  }
  // console.log(wish)
  return wish;
};
getDefaultWishlist();

export const ShopcontextProvider = (props) => {
  const [cartitems, setCartitems] = useState(getDefaultCart());
  const [wishList, setWishList] = useState(getDefaultWishlist());
  const [selectedProductId, setSelectedProductId] = useState(null);// to store the product id

  //-----------------search input-------------------
  const [search, setSearch] = useState("");

  const filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(filteredItems);
  // console.log(search)

  const getTotalAmount = () => {
    let total = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let itemInfo = data.find((pro) => pro.id === Number(item));
        // console.log("===========", cartitems[item]);
        total = total + cartitems[item] * itemInfo.newPrice;
      }
    }
    return total;
  };

  const getCartCount = () => {
    let carttotal = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        carttotal = cartitems[item] + carttotal;
      }
    }
    return carttotal;
  };

  const addToCart = (itemId) => {
    toast.success("Item added to cart!");
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const addToWishList = (itemId) => {
    toast.success("Item added to Wishlist!");
    setWishList((prev) => ({ ...prev, [itemId]: true }));
  };

  const removeFromWishList = (itemId) => {
    toast.error("Item removed from Wishlist!");
    setWishList((prev) => ({ ...prev, [itemId]: false }));
  };



  //----to send id ------
  const selectProduct = (productId) => {
    setSelectedProductId(productId);
  };


  // console.log("wishList", wishList);
  // console.log(cartitems);

  const contextValue = {
    cartitems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getCartCount,
    wishList,
    removeFromWishList,
    addToWishList,
    setWishList,
    search,
    setSearch,
    filteredItems,
    setSelectedProductId,   // Include selected product ID in the context
    selectProduct,          // Function to set the selected product ID
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
