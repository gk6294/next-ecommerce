"use client";

import { useState } from "react";

const Add = (type: "increase" | "decrease") => {
  const [quantity, setQuantity] = useState(1);
  // Temporary
  const stock = 4;
  const handleQuantity = (type: "decrease" | "increase") => {
    if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "increase" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        <h4>Choose a Quantity</h4>
        <div className="">
          <div className="flex justify-between">
            <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
              <button
                className="cursor-pointer text-xl"
                onClick={() => handleQuantity("decrease")}
              >
                -
              </button>
              {quantity}
              <button
                className="cursor-pointer text-xl"
                onClick={() => handleQuantity("increase")}
              >
                +
              </button>
            </div>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left! <br />
            {"Don't"} miss it
          </div>
          <button className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
