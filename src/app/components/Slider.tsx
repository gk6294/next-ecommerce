"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer collection 1",
    description: "5% off",
    img: "/woman.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Summer collection 2",
    description: "5% off",
    img: "/woman.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 3,
    title: "Summer collection 3",
    description: "5% off",
    img: "/woman.png",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000"></div>
      {slides.map((slide) => (
        <div
          className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          key={slide.id}
        >
          {/* Text */}
          <div className="h-1/2 xl:w-1/2 ">
            <h2>{slide.description}</h2>
            <h1>{slide.title}</h1>
            <Link href={slide.url}>
              <button className="rounded-md bg-black text-white">
                Shop Now
              </button>
            </Link>
          </div>
          {/* Image */}
          <div className="h-1/2 xl:w-1/2 relative">
            <Image
              src={slide.img}
              alt=""
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
