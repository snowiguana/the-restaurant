import Image from "next/image";
import React from "react";
const CartPage = () => {
  return (
    <div className="h-[calc(100vh-9rem)] md:h-[calc(100vh-15rem)] flex flex-col text-sky-700 lg:flex-row">
      {/* PRODUCTS CONTAINER  */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-auto lg:h-full lg:w-2/3 lg:px-20 xl:p-40">
        {/* SINGLE ITEM  */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/teal/t10.jpg" alt="" width={200} height={200} />
          <div>
            <h1 className="uppercase text-xl font-bold">Blueberry Smoothie</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$ 20.99</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER  */}
      <div className="h-1/2 p-4 bg-cyan-100 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 lg:px-20 xl:p-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$ 81.70</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$ 0</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-emerald-500"> FREE!</span>
        </div>
        <hr className=" my-2 border-emerald-500" />
        <div className="flex justify-between">
          <span className="">TOTAL (INCL. VAT)</span>
          <span className="font-bold">$ 81.70</span>
        </div>
        <button className="bg-cyan-500 text-white p-3 rounded-md w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
