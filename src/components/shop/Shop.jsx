import React from "react";
import { data } from "../shop/data";
import { Product } from "./Product";
import { Toaster } from "react-hot-toast";
export const Shop = () => {
  return (
    <div>
      <div>
        <div>
          <Toaster />
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-violet-600 text-white py-12 text-center">
          <h1 className="text-3xl xl:text-5xl font-extrabold mb-4">
            Discover Our Collection
          </h1>
          <p className=" text-sm xl:text-xl">
            Explore a world of amazing products at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-12 mt-10 bg-white container max-w-7xl mx-auto">
          {data.map((product) => {
            return <Product data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};
