import Add from "../components/Add";
import CustomizeProduct from "../components/CustomizeProducts";
import ProductImages from "../components/ProductImages";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="text-4xl font-medium">Product Name</div>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          unde eligendi, tempora veniam repellat consequuntur praesentium
          eveniet quae sint numquam reiciendis qui animi. Harum sunt quam
          recusandae qui autem? Enim!
        </p>
        <div className="h-[2px] bg-gray-100 " />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-grey-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100"> </div>
        <CustomizeProduct />
        <Add />
        <div className="h-[2px] bg-gray-100"> </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            explicabo in dolor ducimus iusto! Quas, voluptas adipisci saepe
            ipsum sit suscipit vero ipsam voluptatibus molestias pariatur
            voluptate alias laborum at?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            explicabo in dolor ducimus iusto! Quas, voluptas adipisci saepe
            ipsum sit suscipit vero ipsam voluptatibus molestias pariatur
            voluptate alias laborum at?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            explicabo in dolor ducimus iusto! Quas, voluptas adipisci saepe
            ipsum sit suscipit vero ipsam voluptatibus molestias pariatur
            voluptate alias laborum at?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
