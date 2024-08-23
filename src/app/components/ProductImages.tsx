"use client";

import type { products } from "@wix/stores";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ productMediaItems }: { productMediaItems: any }) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={productMediaItems[index].image.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      {productMediaItems.map((item: any, i: number) => (
        <div
          className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
          key={item.id}
        >
          <Image
            src={item.image.url}
            alt=""
            fill
            sizes="30vw"
            className="object-cover rounded-md"
            onClick={() => setIndex(i)}
          />
        </div>
      ))}
      <div className="h-[500px] relative"></div>
    </div>
  );
};

export default ProductImages;
