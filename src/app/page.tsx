"use client";

import { WixClientContext } from "@/context/wixContext";
import CategoryList from "./components/CategoryList";
import NewProductList from "./components/NewProductList";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import { useContext, useEffect } from "react";
console.log("HomePage component is being executed");

const HomePage = () => {
  const wixClient = useContext(WixClientContext);
  useEffect(() => {
    console.log("Effect running");
    const getProducts = async () => {
      console.log("Fetching products");
      try {
        const res = await wixClient.products.queryProducts().find();
        console.log("Products fetched:", res);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, [wixClient]);
  
  console.log("Component rendered");


  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   };
  //   getProducts();
  // },[wixClient]);
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1>Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1>New Products</h1>
        <NewProductList />
      </div>
    </div>
  );
};

export default HomePage;
