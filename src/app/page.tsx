import { Suspense } from "react";
import CategoryList from "./components/CategoryList";
import NewProductList from "./components/NewProductList";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1>Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList categoryId={process.env.FEATURE_PRODUCT_ID!} limit={4} />
        </Suspense>
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
