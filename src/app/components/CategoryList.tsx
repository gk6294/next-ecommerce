import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className="flex gap-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/star.png"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/visa.png"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          ></Image>
          <Image src="/youtube.png" alt="" fill sizes="25vw"></Image>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          View Cart
        </button>
      </Link>
    </div>
  );
};
export default CategoryList;
