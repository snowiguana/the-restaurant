import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row md: justify-between md:bg-[url('/teal/t18.jpg')] md:h-[70vh]">
      {/* Text Container */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6">
        <h1 className="text-sky-700 text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
        <p className="text-sky-700 xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown/>
        <button className="bg-cyan-500 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* Image Container */}
      <div className="flex-1 w-full relative md: h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
