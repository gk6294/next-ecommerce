"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { id: 1000, url: "/woman.png" },
  { id: 2000, url: "/skrill.png" },
  { id: 3000, url: "/youtube.png" },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      {images.map((img, i) => (
        <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id}>
          <Image
            src={img.url}
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
