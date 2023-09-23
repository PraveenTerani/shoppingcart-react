import React, { useContext } from "react";
import { data } from "../shop/data";
import { Product } from "./Product";
import { Toaster } from "react-hot-toast";
import Banner from "../banner/Banner";
import { ShopContext } from "../../context/Shopcontext";


export const Shop = () => {
  const { filteredItems } = useContext(ShopContext);

  return (
    <div>
      <div>
        <div>
          <Toaster />
        </div>

        <Banner
          heading={"Discover Our Collection"}
          subheading={
            "Explore a world of amazing products at unbeatable prices"
          }
        />

        
          <div className="grid grid-cols-12 mt-10 bg-white container max-w-7xl mx-auto"  >
            {filteredItems.map((product, index) => (
             
                <Product key={index} data={product} />

              
            ))}
          </div>
        
      </div>
    </div>
  );
};
