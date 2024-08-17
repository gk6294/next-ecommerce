import CategoryList from "./components/CategoryList";
import NewProductList from "./components/NewProductList";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1>Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1>Categories</h1>
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
