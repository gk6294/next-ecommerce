"use client"
import Image from "next/image"

const CartModal = () => {

    const cartItems = false
    
    return (<div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
    {!cartItems? (
        <div className="flex flex-col gap-8">
             {/* Item */}
        <div className="flex gap-4">
        <Image src='/woman.png' alt='' width={72} height={72} className="object-cover rounded-md"></Image>
        <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div className=""></div>
            {/* TITLE */}
            <div className="flex items-center justify-between g-8">
                <h3 className="font-semibold"> Product Name</h3>
                <div className="p-1 bg-gray-50 rounded-sm">$49</div>
            </div>
            <div className="text-sm text-gray-50">
                {/* DESC */}
                available
            </div>
             {/* BOTTOM */}
            <div className="flex justify-between text-sm">
            <div>Qty. 2</div>
            <div className="text-blue-500">Remove</div>
            </div>
            
        </div>
    </div>
    </div>
):(<div className=''>Empty Cart</div> )}
    </div>)
}   

export default CartModal;