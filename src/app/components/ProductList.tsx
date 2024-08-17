import Link from "next/link";
import Image from "next/image";
const ProductList = () => {
  return (
    <div className="flex gap-8 gap-y-16 justify-between flex-wrap">
      <Link href="/star.png" className="w-full flex flex-col gap-4">
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
      </Link>
    </div>
  );
};
export default ProductList;
