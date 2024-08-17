"use client"
import Image from "next/image"

const CartModal = () => {

    const cartItems = false
    
    return (
      <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
        {!cartItems ? (
          <div className="flex flex-col gap-8">
            {/* Item */}
            <h2 className="text-gray-500 text-xl">Shopping Cart</h2>
            <div className="flex gap-4">
              <Image
                src="/woman.png"
                alt=""
                width={72}
                height={72}
                className="object-cover rounded-md"
              ></Image>
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className=""></div>
                {/* TITLE */}
                <div className="flex items-center justify-between g-8">
                  <h3 className="font-semibold"> Product Name</h3>
                  <span className="p-1 bg-gray-50 rounded-sm">$49</span>
                </div>
                <div className="text-sm text-gray-50">
                  {/* DESC */}
                  available
                </div>
                {/* BOTTOM */}
                <span className="flex justify-between text-sm"></span>
                <div>Qty. 2</div>
                <span className="text-blue-500">Remove</span>
              </div>
            </div>
            {/*Total Buttom */}
            <div className="">
              <div className="flex items-cetner justify-between font-semibold">
                <span className="">Subtotal</span>
                <span className="">$49</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                {" "}
                Shipping and taxes calculated at checkout.
              </p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                  View Cart
                </button>
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 bg-black text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="">Empty Cart</div>
        )}
      </div>
    );
}   

export default CartModal;